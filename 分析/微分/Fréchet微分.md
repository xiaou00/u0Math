#分析 

>[!definition] Fréchet微分
>设$V,W$是[[赋范空间]], $U$是$V$中的[[拓扑空间|开集]], $x\in U$是空间中的一个点. 一个[[映射]]$f:U\to W$称为在点$x$上是**Fréchet可微**(differentiable)的, 若存在[[有界线性算子]](等价于连续)$L:V\to W$使得
>$$\lim_{\norm{\Delta x}_V\to 0}\frac{\norm{f(x+\Delta x)-f(x)-L(\Delta x)}_W}{\norm{\Delta x}_V}=0$$
>此处的极限为赋范空间作为[[度量空间]]时的[[函数极限]]. 上述两个式子中的有界线性算子$L$就称为映射$f$在点$x$处的**Fréchet微分(导算子)**(Fréchet differential). 记作
>$$\D f(x)=L\quad\text{或}\quad\d f(x)(h)=L(h)$$
>如果$f$在开集$U$上的每一点都Fréchet可微, 且求导映射$\D:U\to\mc L(V,W)$是连续的, 就称$f$在$U$上**Fréchet连续可微**, 记作$f\in\csp^1(U,Y)$.

※注: Fréchet可微, Fréchet微分经常简写为F-可微或F-微分.
※一般而言, Fréchet微分都定义在[[Banach空间]]上.
※在这里我们推广的是全微分的概念.

>[!ex] 例1 ($\R\to\R$的Fréchet导数)
>在单变量实函数的微分学中, 导数$f'(x)$就是一个关于$x$的简单数值. 此时的Fréchet导数
>$$x\mapsto\D f(x)$$
>本质上就是实数乘积 (也是线性变换)
>$$t\mapsto f'(x)t$$

>[!ex] 例2 ($\R^n\to\R^m$的Fréchet导数)
>$\R^n\to\R^m$形函数的Fréchet导数就是[[Jacobi矩阵]], 此时的Fréchet导数
>$$x\mapsto\D f(x)$$
>本质上就是矩阵乘法
>$$\vec x\mapsto \mb J_f(\vec x)$$
>其中$\mb J_f(\vec x)$为
>$$\begin{bmatrix}
\frac{\p f_1}{\p x_1}&\frac{\p f_1}{\p x_2}&\cdots&\frac{\p f_1}{\p x_n}\\
\frac{\p f_2}{\p x_1}&\frac{\p f_2}{\p x_2}&\cdots&\frac{\p f_2}{\p x_n}\\
\vdots&\vdots&\ddots&\vdots \\
\frac{\p f_m}{\p x_1}&\frac{\p f_m}{\p x_2}&\cdots&\frac{\p f_m}{\p x_n}
\end{bmatrix}$$
>$f_i$为$f$的第$i$个分量函数, $x_j$为$\vec x$的第$j$个分量.

>[!theorem] 定理1 (唯一性)
>映射$f:V\supset U\to W$在$x$的F-微分存在即唯一.

>[!proof]
>假设$f$在$x\in U$处存在两个Fréchet导数$L_1,L_2:U\to W$. 根据定义, 对于$L_1,L_2$分别有
>$$\begin{aligned}
\lim_{\norm{\Delta x}_V\to 0}\frac{\norm{f(x+\Delta x)-f(x)-L_1(\Delta x)}_W}{\norm{\Delta x}_V}=0\\
\lim_{\norm{\Delta x}_V\to 0}\frac{\norm{f(x+\Delta x)-f(x)-L_2(\Delta x)}_W}{\norm{\Delta x}_V}=0
\end{aligned}\tag{I}$$
>要证$L_1=L_2$, 即对所有$\Delta x\in V$都有$L_1(\Delta x)=L_2(\Delta_x)$. 我们考虑做差:
>$$\lim_{\norm{\Delta x}_V\to 0}{\frac{\norm{L_1(\Delta x)-L_2(\Delta x)}_W}{\norm{\Delta x}_V}}$$
>注意到
>$$L_1(\Delta x)-L_2(\Delta x)=[f(x+\Delta x)-f(x)-L_2(\Delta x)]-[f(x+\Delta x)-f(x)-L_1(\Delta x)]$$
>(其实这只是朴素的代数变换) 由赋范空间的三角不等式 ($\norm{\vec a+\vec b}\le\norm{\vec a}+\norm{\vec b}$),
>$$\norm{L_1(\Delta x)-L_2(\Delta x)}_W\le\norm{f(x+\Delta x)-f(x)-L_2(\Delta x)}_W-\norm{f(x+\Delta x)-f(x)-L_1(\Delta x)}_W$$
>统一除以$\norm{\Delta x}_V$:
>$$\frac{\norm{L_1(\Delta x)-L_2(\Delta x)}_W}{\norm{\Delta x}_V}\le\frac{\norm{f(x+\Delta x)-f(x)-L_2(\Delta x)}_W}{\norm{\Delta x}_V}-\frac{\norm{f(x+\Delta x)-f(x)-L_1(\Delta x)}_W}{\norm{\Delta x}_V}$$
>由(I), 当$\norm{\Delta x}_V\to 0$时, 上式右边两项都趋于0, 因此可以得到:
>$$\lim_{\norm{\Delta x}_V\to 0}{\frac{\norm{(L_1-L_2)(\Delta x)}_W}{\norm{\Delta x}_V}}=0$$
>令$L=L_1-L_2$. 因此$L$也是有界线性算子. 从而:
>$$\lim_{\norm{\Delta x}_V\to 0}{\frac{\norm{L(\Delta x)}_W}{\norm{\Delta x}_V}}=0\tag{II}$$
>任取$V$中的非零向量$\vec v$, 对任意实数$t\ne 0$, 令$\Delta x=t\vec v$. 显然当$t\to 0$时, $\norm{\Delta x}=|t|\cdot\norm{\vec v}\to 0$ (范数的齐次性). 带入(II)得:
>$$\lim_{t\to 0}{\frac{\norm{L(t\vec v)}_W}{\norm{t\vec v}_V}}=0$$
>由于$L$是线性算子, 且范数具有齐次性, 再由$t\ne 0$, 可以将$t$提出并消去:
>$$\lim_{t\to 0}{\frac{|t|\cdot\norm{L(\vec v)}_W}{|t|\cdot\norm{\vec v}_V}}=0\implies\lim_{t\to 0}{\frac{\norm{L(\vec v)}_W}{\norm{\vec v}_V}}=0$$
> 剩下的量与$t$无关, 于是可以去掉极限符号. 由于$\vec v$是非零向量, 因此$\norm{\vec v}_V\ne 0$, 我们可以推出
>$$\frac{\norm{L(\vec v)}_W}{\norm{\vec v}_V}=0\implies \norm{L(\vec v)}_W=0$$
>从而$L(\vec v)=\vec 0_W$, 结合恒等式$L(\vec 0_V)=\vec 0_W$可知$L$为零算子, 于是$L_1=L_2$. 证毕.

F-微分具有以下基本性质:

>[!theorem] 定理2 (连续性)
>若$f:X\supset U\to Y$在$x_0$点F-可微, 则$f$在$x_0$点连续.

>[!proof]
>由于$f$在$x_0$点F-可微, 从而存在线性算子$\D f(x_0)$满足
>$$\lim_{\norm{\Delta x}_X\to 0}\frac{||f(x_0+\Delta x)-f(x_0)-\D f(x_0)\Delta x||_Y}{\norm{\Delta x}_X}=0\tag{I}$$
>只需证明
>$$\lim_{x\to x_0}{f(x)}=f(x_0)$$
>即可. 等价地, 只需证明
>$$\lim_{\norm{h}_X\to 0}{\norm{f(x_0+h)-f(x_0)}_Y}=0\tag{*}$$
>从定义出发, 我们将(I)分解为线性和的误差形式:
>$$f(x_0+h)-f(x_0)=\D f(x_0)h+r(h)\tag{II}$$
>其中$r(h)$是误差项, 满足:
>$$\lim_{\norm{h}_X\to 0}{\frac{\norm{r(h)}_Y}{\norm{h}_X}}=0$$
>对(II)施加三角不等式:
>$$0\le\norm{f(x_0+h)-f(x_0)}_Y=\norm{\D f(x_0)h+r(h)}_Y\le\norm{\D f(x_0)h}_Y+\norm{r(h)}_Y\tag{III}$$
>下面我们证明当$\norm{h}_X\to 0$时, 不等式右边的两项也趋于0. 显然$\norm{r(h)}_Y\to0$成立, 这是由定义给出的. 对于线性项$\norm{\D f(x_0)h}_Y$, 由定义, $\D f(x_0)$是有界线性算子, 从而其算子范数$\norm{\D f(x_0)}_{\rm op}\in\R_+$使得
>$$\norm{\D f(x_0)h}_Y\le\norm{\D f(x_0)}_{\rm op}\cdot\norm{h}_X$$
>显然当$\norm{h}_X\to 0$时, $\norm{\D f(x_0)h}_Y\to 0$成立. 从而当$\norm{h}_X\to 0$时, $\norm{\D f(x_0)h}_Y+\norm{r(h)}_Y\to0$, 回代(III), 由[[夹逼定理]]就证明了(\*), 证毕.

>[!theorem] 定理3 (线性性)
>对任意标量$c\in\F$, F-微分满足:
>1. $\D(f+g)(x)=\D f(x)+\D g(x)$.
>2. $\D(c\cdot f)(x)=c\cdot\D f(x)$.

>[!proof]
>不妨令
>$$\begin{aligned}
f(x_0+h)-f(x_0)=\D f(x_0)h+r_f(h)\quad\lim_{\norm{h}_X\to 0}{\frac{\norm{r_f(h)}_Y}{\norm{h}_X}}=0\\
g(x_0+h)-g(x_0)=\D g(x_0)h+r_g(h)\quad\lim_{\norm{h}_X\to 0}{\frac{\norm{r_g(h)}_Y}{\norm{h}_X}}=0
\end{aligned}$$
>令$\varphi=f+g$. 我们有
>$$\begin{aligned}
\varphi(x_0+h)-\varphi(x_0)=&[f(x_0+h)+g(x_0+h)]-[f(x_0)+g(x_0)]\\
=&[f(x_0+h)-f(x_0)]+[g(x_0+h)-g(x_0)]\\
=&[\D f(x_0)h+r_f(h)]+[\D g(x_0)h+r_g(h)]\\
=&[\D f(x_0)+\D g(x_0)]h+[r_f(h)+r_g(h)]
\end{aligned}$$
>余项显然$\to0$, 因此$\D f(x_0)+\D g(x_0)$就是符合条件的线性算子, 由唯一性就证明了定理. 类似的方法容易证明(2).

