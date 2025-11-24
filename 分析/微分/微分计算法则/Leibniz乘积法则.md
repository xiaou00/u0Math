#分析 
$\newcommand{\norm}[1]{\lVert{#1}\rVert}$
>[!theorem] Leibniz乘积法则
>设$X,A,B,C$是[[赋范空间]], 考虑连续的双线性映射$\mathbb b:A\times B\to C$, 若$U\subset X$是开集, $f:U\to A$, $g:U\to B$是在$U$上[[Fréchet微分|Fréchet可微]]的映射, 即$f\in\csp^1(U,A),g\in\csp^1(U,B)$. 定义复合映射$h:U\to C$为:
>$$h(x)=\mathbb b(f(x),g(x))$$
>即使下列图表交换:
>```tikz
\usepackage{tikz-cd}
\begin{document}
\Large
\begin{tikzcd}[row sep=large]
X & B & {A\times B} \\
U & A & C
\arrow["\pi_B"', from=1-3, to=1-2]
\arrow["\mathbf{b}", from=1-3, to=2-3]
\arrow["\iota", hook, from=2-1, to=1-1]
\arrow["g", from=2-1, to=1-2]
\arrow["f"', from=2-1, to=2-2]
\arrow["\pi_A", from=1-3, to=2-2]
\arrow["h"', bend right=45, from=2-1, to=2-3]
\end{tikzcd}
\end{document}
>```
>那么$h$在$U$上也是F-可微的, 且F-导数为:
>$$\D h(x)=\mathbb b(\D f(x),g(x))+\mathbb b(f(x),\D g(x))$$

>[!proof]
>为了证明结论成立, 只需证明当$v\in U$时:
>$$\lim_{\norm{v}_X\to 0}{\frac{\norm{h(x_0+v)-h(x_0)-[\mathbb b(\D f(x_0),g(x_0))+\mathbb b(f(x_0),\D g(x_0))]v}_C}{\norm{v}_X}}=0$$
>这一步实际上是由F-微分和$\mathbb b$的线性性将$v$提到了最外层. 我们展开微分:
>$$\begin{aligned}
f(x_0+v)-f(x_0)=\D f(x_0)v+r_f(v)\quad\lim_{\norm{v}_X\to 0}{\frac{\norm{r_f(v)}_A}{\norm{v}_X}}=0\\
g(x_0+v)-g(x_0)=\D g(x_0)v+r_g(v)\quad\lim_{\norm{v}_X\to 0}{\frac{\norm{r_g(v)}_B}{\norm{v}_X}}=0
\end{aligned}$$
>代入$h(x)$定义有:
>$$h(x_0+v)-h(x_0)=\mathbb b[f(x_0)+\D f(x_0)v+r_f(v),g(x_0)+\D g(x_0)v+r_g(v)]-\mathbb b(f(x_0),g(x_0))$$
>我们将上式展开:
>$$\begin{aligned}
h(x_0+v)-h(x_0)&=\mathbb b(f(x_0),g(x_0))\\
&+\mathbb b(\D f(x_0)v,g(x_0))+\mathbb b(f(x_0),\D g(x_0)v)\\
&+\mathbb b(r_f(v),g(x_0))+\mathbb b(f(x_0),r_g(v))\\
&+\mathbb b(\D f(x_0)v,\D g(x_0)v)\\
&+\mathbb b(\D f(x_0)v,r_g(v))+\mathbb b(r_f(v),\D g(x_0)v)+\mathbb b(r_f(v),r_g(v))\\
&-\mathbb b(f(x_0),g(x_0))\\
&=[\mathbb b(\D f(x_0),g(x_0))+\mathbb b(f(x_0),\D g(x_0))]v+r(v)
\end{aligned}\tag{I}$$
>其中,
>$$\begin{aligned}
r(v)&=\mathbb b(r_f(v),g(x_0))+\mathbb b(f(x_0),r_g(v))\\
&+\mathbb b(\D f(x_0)v,\D g(x_0)v)\\
&+\mathbb b(\D f(x_0)v,r_g(v))+\mathbb b(r_f(v),\D g(x_0)v)+\mathbb b(r_f(v),r_g(v))\\
\end{aligned}\tag{II}$$
>下面我们只需证明余项$r(v)$满足:
>$$\lim_{\norm{v}{v}_X\to 0}{\frac{\norm{r(v)}_C}{\norm{v}_X}}=0\tag{*}$$
>我们来估计$r(v)$中的每一项, 由于$\mathbb b$连续, 由[[赋范空间|此页面定理2]], 存在$\lambda>0$使得$\norm{\mathbb b(a,b)}_C\le \lambda\cdot\norm{a}_A\norm{b}_B$对任意$a\in A,b\in B$成立. 对于$r(v)$前两项, 我们有:
>$$\begin{aligned}
\frac{\norm{\mathbb b(r_f(v),g(x_0))}_C}{\norm{v}_X}&\le\frac{\lambda\cdot\norm{r_f(v)}_A\norm{g(x_0)}_B}{\norm{v}_X}\\
&=\lambda\cdot\norm{g(x_0)}_B\cdot\frac{\norm{r_f(v)}_A}{\norm{v}_X}\overset{\norm{v}_X\to 0}{\longrightarrow}0
\end{aligned}\tag{III.I}$$
>和
>$$\begin{aligned}
\frac{\norm{\mathbb b(f(x_0),r_g(v))}_C}{\norm{v}_X}&\le\frac{\lambda\cdot\norm{f(x_0)}_A\norm{r_g(v)}_B}{\norm{v}_X}\\
&=\lambda\cdot\norm{f(x_0)}_A\cdot\frac{\norm{r_g(v)}_B}{\norm{v}_X}\overset{\norm{v}_X\to 0}{\longrightarrow}0
\end{aligned}\tag{III.II}$$
>对于$r(v)$第三项, 有
>$$\begin{aligned}
\frac{\norm{\mathbb b(\D f(x_0)v,\D g(x_0)v)}_C}{\norm{v}_X}&\le\frac{\lambda\cdot\norm{\D f(x_0)v}_A\norm{\D g(x_0)v}_B}{\norm{v}_X}\\
&\le\frac{\lambda\cdot\norm{\D f(x_0)}_{\rm op}\norm{v}_X\norm{\D g(x_0)}_{\rm op}\norm{v}_X}{\norm{v}_X}\\
&=\lambda\cdot\norm{\D f(x_0)}_{\rm op}\norm{\D g(x_0)}_{\rm op}\norm{v}_X\overset{\norm{v}_X\to 0}{\longrightarrow}0
\end{aligned}\tag{IV}$$
>对于$r(v)$最后两项, 有
>$$\begin{aligned}
\frac{\norm{\mathbb b(\D f(x_0)v,r_g(v))}_C}{\norm{v}_X}&\le\frac{\lambda\cdot\norm{\D f(x_0)v}_A\norm{r_g(v)}_B}{\norm{v}_X}\\
&\le\frac{\lambda\cdot(\norm{\D f(x_0)}_{\rm op}\norm{v}_X)\norm{r_g(v)}_B}{\norm{v}_X}\\
&=\lambda\cdot\norm{\D f(x_0)}_{\rm op}\norm{r_g(v)}_B\\
&=\lambda\cdot\norm{\D f(x_0)}_{\rm op}\norm{v}_X\cdot\frac{\norm{r_g(v)}_B}{\norm{v}_X}\overset{\norm{v}_X\to 0}{\longrightarrow}0
\end{aligned}\tag{V.I}$$
>和
>$$\begin{aligned}
\frac{\norm{\mathbb b(r_f(v),\D g(x_0)v)}_C}{\norm{v}_X}&\le\frac{\lambda\cdot\norm{r_f(v)}_A\norm{\D g(x_0)v}_B}{\norm{v}_X}\\
&\le\frac{\lambda\cdot(\norm{\D g(x_0)}_{\rm op}\norm{v}_X)\norm{r_f(v)}_A}{\norm{v}_X}\\
&=\lambda\cdot\norm{\D g(x_0)}_{\rm op}\norm{r_f(v)}_A\\
&=\lambda\cdot\norm{\D g(x_0)}_{\rm op}\norm{v}_X\cdot\frac{\norm{r_f(v)}_A}{\norm{v}_X}\overset{\norm{v}_X\to 0}{\longrightarrow}0
\end{aligned}\tag{V.II}$$
>结合(III.I), (III.II), (IV), (V.I), (V.II)与(II)就证明了(\*). 再代入(I)就证明了原定理.

>[!corollary] 推论1 (乘积形式)
>考虑[[Banach代数]]$X$, 其乘法显然是双线性映射, $f,g:U\to X$是在$U$上F-可微的映射, 且$U$是开集. 若定义$f\odot g$为函数的逐点乘法, 则
>$$\D (f\odot g)(x)=\D f(x)\odot g(x)+f(x)\odot\D g(x)$$

>[!corollary] 特殊情形1 ($\R\to\R$)
>考虑定义在同一开集上的实函数$f,g$, 则
>$$(fg)'(x)=f'(x)g(x)+f(x)g'(x)$$
>即如下变量关系
>$$\d(uv)=v\d{u}+u\d{v}$$

>[!corollary] 特殊情形2 ($\R^n\to\R^m$)
>考虑定义在同一开集上的多元实向量函数$\vec f,\vec g$, 则
>$$\mb J_{\mb{f\odot g}}(\vec x)=\mb f\odot\mb J_{\mb g}(\vec x)+\mb g\odot\mb J_{\mb f}(\vec x)$$
>其中$\odot$代表逐点乘积.

