#分析 

>[!definition] Lebesgue积分 (实)
>设$(X,\mc A,\mu)$是[[测度空间]], 若$s:X\to[0,\infty)$为[[可测映射|可测]][[简单函数]],  其典范形式为
>$$s=\sum_{i=1}^n{\alpha_i\chi_{A_i}}$$
>其中$\chi_{A_i}$是[[特征函数]], 则对于$E\in\mc A$, 定义
>$$\int_E{s\,\d\mu}=\sum_{i=1}^n{\alpha_i\mu(A_i\cap E)}$$
>如下图所示:
>```tikz
\usepackage{pgfplots}
\begin{document}
\begin{tikzpicture}[domain=-3:3,scale=1]
\draw[very thin,color=gray] (-3+0.1,-3+0.1) grid (3-0.1,3-0.1);
\draw[->] (-3-0.1,0) -- (3+0.1,0) node[right] {};
\draw[->] (0,-3-0.1) -- (0,3+0.1) node[above] {};
\draw[red,thick,fill=red!25!transparent] (-0.5,0)--(-0.5,1.88)--(0.5,1.88)--(0.5,0)--cycle;
\draw[red,thick,fill=red!25!transparent] (1,0)--(1,1.54)--(0.5,1.54)--(0.5,0)--cycle;
\draw[red,thick,fill=red!25!transparent] (-1,0)--(-1,1.54)--(-0.5,1.54)--(-0.5,0)--cycle;
\draw[red,thick,fill=red!25!transparent] (2,0)--(2,0.58)--(1,0.58)--(1,0)--cycle;
\draw[red,thick,fill=red!25!transparent] (-2.5,0)--(-2.5,0.2)--(-1,0.2)--(-1,0)--cycle;
\node[below,red] at (0,0) {$\mu f^{-1}(\alpha_1)$};
\node[above right,red] at (0,1.88) {$\alpha_1$};
\node[above,red] at (1,1.54) {$\alpha_2$};
\node[above,red] at (-1,1.54) {$\alpha_2$};
\draw[red,thick,->] (-0.75,-2)--(-0.9,-2)--(-0.9,-0.1);
\draw[red,thick,->] (0.75,-2)--(0.9,-2)--(0.9,-0.1);
\node[red] at (0,-2) {$\mu f^{-1}(\alpha_2)$};
\draw[line width=1pt,domain=-3:3,samples=100] plot (\x,{cos(deg(\x))+1});
\end{tikzpicture}
\end{document}
>```
>在Lebesgue积分的语境中, 我们约定$[0,\infty]$中的代数运算满足$0\cdot\infty=0$.
>若正实函数$f:X\to[0,\infty]$可测, 且$E\in\mc A$, 定义
>$$\int_E{f\,\d\mu}=\sup{\int_E{s\,\d\mu}}$$
>其中$s$是任何满足$0\le s\le f$(逐点) 的可测简单函数. 对于任意实函数$f:X\to\R$, 我们令$$\begin{aligned}
f^+(x)=\max(f(x),0)=&\begin{cases}
f(x)&f(x)\ge0\\
0&f(x)<0
\end{cases}\\
f^-(x)=\max(-f(x),0)=&\begin{cases}
f(x)&-f(x)\le0\\
0&f(x)>0
\end{cases}
\end{aligned}$$
>此时对于$E\in\mc A$, 定义
>$$\int_E{f\,\d\mu}=\int_E{f^+\,\d\mu}-\int_E{f^-\,\d\mu}$$
>上述定义的$\int_E{f\,\d\mu}$就称为$f$在$E$上关于测度$\mu$的**Lebesgue积分**(Lebesgue integral).

我们可以将Lebesgue积分推广到有限维线性空间:

>[!definition] Lebesgue积分 ($\R^n$)
>设$(X,\mc A,\mu)$是测度空间, $\mb f:X\to\R^n$是可测函数, 那么它对其每个分量都是可测的 ([[可测映射|此页面定理4]]). 因此我们定义:
>$$\int_E{\bf f\,\d\mu}=\left[\int_E{f_1\,\d\mu},\int_E{f_2\,\d\mu},\cdots,\int_E{f_n\,\d\mu}\right]$$
>称之为该函数的**Lebesgue积分**.

复积分是它的一个特殊形式:

>[!definition] Lebesgue积分 (复)
>设$(X,\mc A,\mu)$是测度空间, $f:X\to\C$是可测函数, 那么它的实部$\Re(f)$和虚部$\Im(f)$都是可测的 ([[可测映射|此页面定理4]]), 分别记为$u$和$v$, 我们定义:
>$$\int_E{f\,\d\mu}=\int_E{u\,\d\mu}+\i\int_E{v\,\d\mu}$$
>称之为该复变函数的**Lebesgue积分**.

下面我们给定Lebesgue积分的一些性质, 容易验证他们对每个情况都是成立的.

以下性质是显而易见的:

>[!proposition] Lebesgue积分的性质
>设$f,g$是可测函数, $(X,\mc A,\mu)$是测度空间:
>1. 若$f=g$几乎处处成立, 则$\int_E{f\,\d\mu}=\int_E{g\,\d\mu}$.
>2. 若$0\le f\le g$几乎处处成立, 则$\int_E{f\,\d\mu}\le\int_E{g\,\d\mu}$.
>3. 若$A\subset B$且$f\ge 0$, 则$\int_A{f\,\d\mu}\le\int_B{f\,\d\mu}$.
>4. 对所有$x\in E$, 若$f(x)=0$, 即使$\mu(E)=\infty$, 也有$\int_E{f\,\d\mu}=0$.
>5. 若$\mu(E)=0$, 若对于每个$x\in E$都有$f(x)=\infty$, 也有$\int_E{f\,\d\mu}=0$.
>6. $\int_E{f\,\d\mu}=\int_X{\chi_E f\,\d\mu}$.

Lebesgue积分显然也具有线性性:

>[!theorem] 定理1 (Lebesgue积分的线性性)
>设$f,g\in \ms{L}^1(\mu)$, $(X,\mc A,\mu)$是测度空间, $E\in\mc A$, 则
>$$\int_E{k f+l g\,\d\mu}=k\int_E{f\,\d\mu}+l\int_E{g\,\d\mu}$$
>即Lebesgue积分是从$\ms{L}^1$空间到值域的线性算子.

>[!proof]
>先证明简单函数的情况. 设$\phi,\psi$是两个简单函数, 且$a,b\in\mathbb \R$. 先将其展开为典范形式:
>$$\begin{aligned}
\phi(x)&=\sum_{i=1}^m{\alpha_i\chi_{A_i}(x)}\\
\psi(x)&=\sum_{j=1}^n{\beta_j\chi_{B_j}(x)}
\end{aligned}$$
>容易证明$k\phi+l\psi$也是简单函数, 且取值集合为$\set{k\alpha_i+l\beta_j}$. 我们可以将$X$划分为更精细的有限个不相交的可测集$E_{ij}=A_i\cap B_j$, 显然$\phi,\psi$在每个$E_{ij}$上都是常数. 那么
>$$\int_Xk\phi+l\psi\,\d\mu=\sum_{i=1}^m\sum_{j=1}^n{(k\alpha_i+l\beta_j)\mu(E_{ij})}$$
>展开并重排得到
>$$\sum_{i=1}^m\sum_{j=1}^n{k\alpha_i\mu(E_{ij})}+\sum_{j=1}^n\sum_{i=1}^m{l\beta_j\mu(E_{ij})}\tag{I}$$
>由于$E_{ij}$两两无交, 从而
>$$\sum_{j=1}^n\mu(E_{ij})=\mu(A_i),\quad\sum_{i=1}^m{\mu(E_{ij})}=\mu(B_j)$$
>代入(I)进行还原
>$$k\sum_{i=1}^m{\alpha_i\mu(A_i)}+l\sum_{j=1}^n{\beta_j\mu(B_j)}=k\int_X{\phi\,\d\mu}+l\int_X{\psi\,\d\mu}$$
>证毕. (容易限制到$E$上)
>
>---
>设$f,g$是两个非负可测函数, 我们分别验证齐次性和可加性.
>对于齐次性, 调用定义
>$$\int_E{kf\,\d\mu}=\sup\set{\,\int_E{\phi\,\d\mu}\,\Big|\,0\le\phi\le kf\,}\tag{I}$$
>令$\psi=\frac{1}{k}\phi$, 显然$\psi$是简单函数, 且$0\le \psi\le f$, 从而
>$$\int_E{\phi\,\d\mu}=\int_E{k\psi\,\d\mu}=k\int_E{\psi\,\d\mu}$$
>回代(I)即有
>$$\int_E{kf\,\d\mu}=\sup\set{\,k\int_E{\psi\,\d\mu}\,\Big|\,0\le\psi\le f\,}=k\sup\set{\,\int_E{\psi\,\d\mu}\,\Big|\,0\le\psi\le f\,}=k\int_E{f\,\d\mu}$$
>下面验证可加性, 由[[可测映射|此页面定理7]], 我们可以构造两个单调递增的简单函数列$(\phi_n)\to f$以及$(\psi_n)\to g$, 则序列$(\phi_n+\psi_n)\to f+g$, 从而
>$$\int_E{f+g\,\d\mu}=\int_E{\lim_{n\to\infty}(\phi_n+\psi_n)\,\d\mu}$$
>由[[单调收敛定理]], 
>$$\int_E{\lim_{n\to\infty}(\phi_n+\psi_n)\,\d\mu}=\lim_{n\to\infty}\int_E{\phi_n+\psi_n\,\d\mu}$$
>由上半部分的结论, 
>$$\lim_{n\to\infty}\int_E{\phi_n+\psi_n\,\d\mu}=\lim_{n\to\infty}\left(\int_E{\psi_n\,\d\mu}+\int_E{\phi_n\,\d\mu}\right)=\lim_{n\to\infty}\int_E{\phi_n\,\d\mu}+\lim_{n\to\infty}\int_E{\psi_n\,\d\mu}=\int_E{f\,\d\mu}+\int_E{g\,\d\mu}$$
>从而结论对于非负可测函数成立.
>
>---
>对$f,g:X\to\R$, 我们将其分解为
>$$f=f^+-f^-,\quad g=g^+-g^-$$
>由于$f,g\in \ms{L}^1(\mu)$, 从而$\int{f^+},\int{f^-},\int{g^+},\int{g^-}$都有限. 分解定义有
>$$\int_E{f+g\,\d\mu}=\int_E{(f^++g^+)-(f^-+g^-)\,\d\mu}=\int_E{(f+g)^+-(f+g)^-\,\d\mu}$$
>要证明齐次性, 只需证明
>$$\int_E{-f\,\d\mu}=\int_E{(-f)^+\,\d\mu}-\int_E{(-f)^-\,\d\mu}=\int_E{f^-\,\d\mu}-\int_E{f^+\,\d\mu}=-\int_E{f\,\d\mu}$$
>证毕.

>[!corollary] 推论1
>设$E,F$是测度空间$(X,\mc A,\mu)$中的无交子集, 则
>$$\int_{E\cup F}{f\,\d\mu}=\int_E{f\,\d\mu}+\int_F{f\,\d\mu}$$

>[!theorem] 定理2 (级数穿透积分)
>设$(X,\mc F,\mu)$是测度空间, 函数列$f_1,f_2,\ldots:X\to[0,\infty]$可测, 且
>$$f(x)=\sum_{i=1}^\infty{f_n(x)},\quad x\in X$$
>则
>$$\int_X{f\,\d\mu}=\sum_{i=1}^\infty{\int_X{f_n\,\d\mu}}$$

>[!proof]
>由此页面定理1可知
>$$\int_X{\sum_{i=1}^N{f_i}\,\d\mu}=\sum_{i=1}^N{\int_X{f_n\,\d\mu}}$$
>再运用[[单调收敛定理]]即证.

>[!theorem] 定理3 (测度置换)
>设$(X,\mc F,\mu)$是测度空间, $f,g:X\to[0,\infty]$是可测映射, 且
>$$\varphi(E)=\int_E{f\,\d\mu},\quad(E\in\mc F)$$
>则$\varphi$是$\mc F$上的一个测度, 且
>$$\int_X{g\,\d\varphi}=\int_X{gf\,\d\mu}$$

>[!proof]
>设$E_1,E_2,\ldots$是$\mc F$中两两不交的元素且并为$E$, 考虑
>$$\chi_Ef=\sum_{j=1}^\infty{\chi_{E_j}}f$$
>和
>$$\varphi(E)=\int_X{\chi_E f\,\d\mu},\quad\varphi(E_j)=\int_X{\chi_{E_j} f\,\d\mu}$$
>由本页定理2, 对右边求和有
>$$\varphi(E)=\sum_{j=1}^\infty{\varphi(E_j)}$$
>从而可数可加性成立, 显然$\varphi(\O)=0$.

>[!theorem] 定理4 (可数可加性)
>设$(X,\mc F,\mu)$是测度空间, $\mc E=\set{E_1,E_2,\ldots}\subset \mc F$是一族可数且两两无交的集族, 则对于可积函数$f\in \ms{L}^1$, 
>$$\int_{\bigcup_{n=1}^\infty{E_n}}{f\,\d\mu}=\sum_{n=1}^\infty{\int_{E_n}{f\,\d\mu}}$$

>[!proof]
>由测度的可数可加性结合[[单调收敛定理]]容易推得.

