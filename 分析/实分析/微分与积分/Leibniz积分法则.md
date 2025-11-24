#分析 

下面的定理是分析中微分和积分的"交换性"的体现:

>[!theorem] Leibniz积分法则, 推广形式
>设$X,Y$是[[Banach空间]], $(I,\mc I,\mu)$是完备的[[测度空间]], $E\in\mc I$. $f:X\times I\to Y$. 且:
>1. 固定$t$后, $f(\cdot,t)$在其定义域$X$上是[[Fréchet微分|Fréchet可微]]的.
>2. 固定$x$后, $f(x,\cdot)$是[[Bochner积分|Bochner可积]]的.
>3. 存在一个$\mu$-可积函数, $g:E\to[0,\infty)\in\ms L^1$使得对所有$x\in I$, 满足
>$$\norm{\D_xf(x,t)}_{\rm op}\le g(t)\quad\rm a.e.$$
>
>则[[Fréchet微分]]可以穿透积分号, 即
>$$\D_x\int_E{f(x,t)\,\d\mu}(t)=\int_E{\D_xf(x,t)\,\d\mu}(t)$$

>[!proof]
>记函数
>$$F(x)=\int_E{f(x,t)\,\d\mu}(t)$$
>我们的目标是证明对于任何方向$h\in X$, [[Gateaux导数]]存在且
>$$\lim_{\norm h_X\to0}{\frac{1}{\norm h_X}\norm{F(x+h)-F(x)-\int_E{\D_xf(x,t)(h)\,\d\mu}(t)}_Y}$$
>我们不妨合并积分号下的项:
>$$\begin{aligned}
&\frac{1}{\norm h_X}\left(F(x+h)-F(x)-\int_E{\D_xf(x,t)(h)\,\d\mu}(t)\right)\\
=&\int_E{\frac{f(x+h,t)-f(x,t)-\D_xf(x,t)(h)}{\norm h_X}\,\d\mu}(t)
\end{aligned}$$
>我们记被积函数
>$$\Phi_h(t)=\frac{f(x+h,t)-f(x,t)-\D_xf(x,t)(h)}{\norm h_X}$$
>于是我们的目标可以改写成证明
>$$\lim_{\norm{h}_X\to0}{\norm{\int_E{\Phi_h(t)\,\d\mu}(t)}_Y}=0\tag{goal}$$
>由于$f(x,t)$关于$x$是F-可微的, 我们利用[[中值不等式]], 对于固定的$t\in E$和任意$h\in X$, 将F-微分写作[[Taylor定理|Taylor余项]]形式
>$$f(x+h,t)-f(x,t)=\D_xf(x,t)(h)+R(h)$$
>其中$R(h)$是余项, 对于空间中的[[道路]]$x+[0,1]h$, 由[[中值不等式]]以及初等的算数,
>$$\begin{aligned}
\norm{R(h)}_Y=&\norm{f(x+h,t)-f(x,t)-\D_xf(x,t)(h)}_Y\\
\le&\sup_{s\in[0,1]}{\norm{\D_xf(x+sh,t)-\D_xf(x,t)}_{\rm op}\cdot\norm{h}_X}
\end{aligned}$$
>从而
>$$\norm{\Phi_h(t)}_Y\le\sup_{s\in[0,1]}{\norm{\D_xf(x+sh,t)-\D_xf(x,t)}_{\rm op}}$$
>由条件, 对于a.e.  $t\in I$, 有
>$$\sup_{s\in[0,1]}{\norm{\D_xf(x+sh,t)}_{\rm op}}\le\sup_{x'\in\mc B(x,\norm h_X)}{\norm{\D_xf(x',t)}_{\rm op}}\le g(t)\in\ms L^1(\mu)$$
>因为$\set{x+sh\mid s\in[0,1]}$是$\mc B(x,\norm h_X)$的子集, 从而有
>$$\begin{aligned}\norm{\Phi_h(t)}_Y&\le\frac1{\norm h_X}(\norm{f(x+h,t)-f(x,t)}_Y+\norm{\D_xf(x,t)(h)}_Y)\\&\le\frac1{\norm h_X}(\norm{\D_xf(x+\tilde sh,t)}_{\rm op}\norm h_X+\norm{\D_xf(x,t)}_{\rm op}\norm{h}_X)\\&\le2g(t)\in\ms L^1(\mu)\end{aligned}$$
>其中第一步用了三角不等式, 第二步中的$\tilde s$是[[中值不等式]]中取到最大值的$s$, 另一项则是算子范数的定义推出的. 考虑$\Phi_h(t)$的逐点收敛性, 由于$f(x,\cdot)$是F-可微的, 对于固定的$t$, 当$\norm{h}_X\to0$时, 由F-微分的定义
>$$\lim_{\norm{h}_X\to0}{\frac1{\norm{h}_X}\norm{f(x+h,t)-f(x,t)-\D_xf(x,t)(h)}_Y}=0$$
>即
>$$\lim_{\norm h_X\to0}{\norm{\Phi_h(t)}_Y}=0\quad\rm a.e.$$
>至此, 由[[控制收敛定理]](DCT), 极限可以穿透积分号, 即
>$$\lim_{\norm h_X\to 0}{\norm{\int_E{\Phi_h(t)\,\d\mu}(t)}_Y}\le \lim_{\norm h_X\to 0}{\int_E{\norm{\Phi_h(t)}_Y\,\d\mu}(t)}= \int_E{\lim_{\norm h_X\to 0}{\norm{\Phi_h(t)}_Y}\,\d\mu}(t)=0$$
>也就证明了$F(x)$的F-微分存在, 且
>$$\D_xF(x)(h)=\int_E{\D_xf(x,t)(h)\,\d\mu}(t)$$
>由于$h$是任意的, 从而原定理得证.

>[!corollary] 推论1
>对于收敛的函数项级数$(f_n)$, 若对每个$f_n\in\csp^1$, 则
>$$\dd x{}\sum_{n=1}^\infty{f_n}=\sum_{n=1}^\infty{\dd x{f_n}}$$

>[!proof]
>只需令$I$为$\Z_+$, 测度为计数测度即可.

>[!corollary] 推论2 ($\R^2\to\R$)
>对于二元函数$f(x,y)\in\csp^1$, 总有
>$$\frac{\p}{\p x}\int_{a}^{b}{f(x,y)\,\d y}=\int_{a}^{b}{\frac{\p}{\p x}f(x,y)\,\d y}$$

