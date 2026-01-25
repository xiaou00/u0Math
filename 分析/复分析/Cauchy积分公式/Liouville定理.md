#分析 

>[!thm] Louville定理
>若$f:\C\to\C$是有界的[[全纯函数|整函数]], 那么$f$是常数.

>[!lem] 引理
>如果函数$f$在包含圆盘$D$的闭包的开集内是[[全纯函数]], 且圆盘$D$的中心为$z_0$, 半径为$R$, 那么
>$$|f^{(n)}(z_0)|\le\frac{n!\norm{f}_C}{R^n}$$
>其中$\norm{f}_C=\sup_{z\in C}|f(z)|$表示$|f|$在圆周$C$上的上确界.

>[!pf]
>对$f^{(n)}(z_0)$应用[[Cauchy积分公式]]得,
>$$\begin{aligned}
|f^{(n)}(z_0)|=&\left|\frac{n!}{2\pi\i}\oint_C{\frac{f(\zeta)}{(\zeta-z_0)^{n+1}}\,\d\zeta}\right|\\
=&\frac{n!}{2\pi}\left|\int_0^{2\pi}{\frac{f(z_0+\Re\e^{\i\theta})}{(\Re\e^{\i\theta})^{n+1}}\Re{\i\e^{\i\theta}}\,\d\theta}\right|\\
\le&\frac{n!}{2\pi}\frac{\norm{f}_C}{R^n}2\pi
\end{aligned}$$

>[!pf]
>因为复数集$\C$是连通的, 对任意$z_0\in\C$, 任意常数$R>0$, 根据引理, 有
>$$|f'(z_0)|\le\frac{B}{R}$$
>其中$B$是函数$f$的界, 只需令$R\to+\infty$就可以证明$f'=0$.
