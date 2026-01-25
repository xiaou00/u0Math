#分析 

>[!thm] Cauchy-Goursat定理
>设$\Omega$是复平面$\C$上的一个[[单连通]]的开集, 设$f:\Omega\to\C$是一个在$\Omega$上的[[全纯函数]], $\gamma$是$\Omega$中任意一条分段光滑的[[简单曲线|简单]][[闭曲线]], 则函数$f(z)$沿着$\gamma$的围道积分为0, 即
>$$\oint_\gamma{f(z)\,\d z}=0$$

由[[复曲线积分|此页面的推论1]], 我们已经知道如果函数$f$在开集$\Omega$上具有原函数, 那么
$$\oint_\gamma{f(z)\,\d z}=0$$
其中$\gamma$是$\Omega$内的任意封闭曲线.

关于这个定理的论证较为繁琐, 但我们可以一步一步来: 我们先来证明这个定理的一个基础形式:

>[!lem] 引理1 Goursat三角形引理
>如果$\Omega$是$\C$的开集, $T\subset\Omega$是三角形周线 (三条线段接成), 其内部也在$\Omega$中, 那么
>$$\oint_T{f(z)\,\d z}=0$$
>其中$f$在开集$\Omega$上全纯.

>[!pf]
>不妨记$T^0$为初始三角形, 定向取正向, 即逆时针方向. $d^0$和$p^0$分别表示其直径和周长. 首先将组成周线的三角形三边各区中点, 如下图所示
>```tikz
\begin{document}
\begin{tikzpicture}
\draw (0,0)--(1,2)--(3,0)--cycle;
\draw (4,0)--(5,2)--(7,0)--cycle;
\draw (4.5,1)--(6,1)--(5.5,0)--cycle;
\end{tikzpicture}
\end{document}
>```
>得到四个新的小三角形, 记为$T_1^1,T_2^1,T_3^1,T_4^1$. 显然它们全等且与$T^0$相似,
>因为每一条连接中点的线段积分时都彼此从相反的方向取了两次, 因此
>$$\oint_{T^0}{f(z)\,\d z}=\oint_{T_1^1}{f(z)\,\d z}+\oint_{T_2^1}{f(z)\,\d z}+\oint_{T_3^1}{f(z)\,\d z}+\oint_{T_4^1}{f(z)\,\d z}$$
>至少存在某个$j$满足
>$$\left|\oint_{T^0}{f(z)\,\d z}\right|\le 4\left|\oint_{T_j^1}{f(z)\,\d z}\right|$$
>否则与上式矛盾. 记上述满足条件的$T^1_j$为$T^1$, 记$d^1,p^1$为其直径与周长, 显然有$d^1=\dfrac12 d^0,p^1=\dfrac12 p^0$. 我们反复重复这个过程得到三角形列
>$$T^0,T^1,\ldots,T^n,\ldots$$
>并且满足
>$$\left|\oint_{T^0}{f(z)\,\d z}\right|\le 4^n\left|\oint_{T^n}{f(z)\,\d z}\right|$$
>且
>$$d^n=2^{-n}d^0,\quad p^n=2^{-n}p^0$$
>其中$d^n,p^n$分别表示$T^n$的直径和周长, 周线$T^n$以及其内部记为实三角形闭内部区域$\Gamma^n$ (容易定义). 因此显然有
>$$\Gamma^0\supset\Gamma^1\supset\cdots\supset\Gamma^n\supset\cdots$$
>其直径趋于0, 由[[闭区间套定理]], 存在唯一的$w\in\C$使得$w\in\bigcap_{n=1}^\infty{\Gamma^n}$. $f$在$w$全纯, 从而可写成
>$$f(z)=f(w)+f'(w)(z-w)+\psi(z)(z-w)$$
>其中$\psi(z)\to 0\,(z\to w)$, 由于常数$f(w)$和线性函数$f'(w)(z-w)$都存在原函数, 于是由[[复曲线积分|此页面推论1]], 得
>$$\oint_{T^n}{f(z)\,\d z}=\oint_{T^n}{\psi(z)(z-w)\,\d z}$$
>现在$w$属于$\Gamma^n$内部, $z$是$\Gamma^n$边界上的点, 从而$|z-w|\le d^n$, 那么显然可以对积分估值
>$$\left|\oint_{T^n}{f(z)\,\d z}\right|\le \epsilon_nd^np^n$$
>其中当$n\to\infty$时,
>$$\epsilon_n=\sup_{z\in T^n}{|\psi(z)|}\to 0$$
>因此
>$$\left|\oint_{T^n}{f(z)\,\d z}\right|\le \epsilon_n4^{-n}d^0p^0$$
>故
>$$\left|\oint_{T^0}{f(z)\,\d z}\right|\le 4^n\left|\oint_{T^n}{f(z)\,\d z}\right|\le \epsilon_nd^0p^0$$
>令$n\to\infty$就推出了积分为0.

>[!cor] 推论1
>如果$f$是开集$\Omega$中的全纯函数, $\Omega$中包含矩形周线$R$及其内部, 那么
>$$\oint_R{f(z)\,\d z}=0$$

>[!lem] 引理2
>定义在开圆盘上$\set{z:|z-z_0|<r}$上的全纯函数在圆盘内具有原函数.

>[!pf]
>不失一般性, 假设圆盘是以原点为中心的, 记为$D$, 任取一点$z\in D$, 用水平的铅垂的这项连接$0$与$z$: 首先沿着实数轴正方向连接$0$与$\tilde z$, 然后沿着虚数轴正方向连接$\tilde z$与$z$. 其中$\tilde z=\Re(z)$. 这个折线显然是分段光滑的, 记为$\gamma_z$. 定义
>$$F(z)=\int_{\gamma_z}{f(w)\,\d w}$$
>显然函数$F(z)$是根据$\gamma_z$的选择定义出来的. 函数$F(z)$在$D$上是全纯的, 且$F'(z)=f(z)$. 这是因为任取$z\in D$, 取复数中充分小的元素$h$, 使得$z+h$始终包含于圆盘$D$内, 考虑
>$$F(z+h)-F(z)=\int_{\gamma_{z+h}}{f(w)\,\d w}-\int_{\gamma_z}{f(w)\,\d w}$$
>也就是函数$f$首先沿着$\gamma_{z+h}$的初始方向积分, 然后沿着$\gamma_z$的反向积分. 函数$f$是在分段光滑的直线上积分的, 当方向相反时积分可以抵消. 由三角形引理以及推论1, 容验证着剩下的路径只剩下$z$到$z+h$的线段. 即
>$$F(z+h)-F(z)=\int_\eta{f(w)\,\d w}$$
>其中$\eta$是$z$到$z+h$的线段. 因为函数$f$在$z$连续, 所以
>$$f(w)=f(z)+\psi(w)$$
>其中当$w\to z$时$\psi(w)\to 0$. 因此
>$$\begin{aligned}
F(z+h)-F(z)=&\int_\eta{f(z)\,\d w}+\int_\eta{\psi(w)\,\d w}\\
=&f(z)\int_\eta{\d w}+\int_\eta{\psi(w)\,\d w}
\end{aligned}$$
>常数1的原函数为$w$, 第一个积分就是$\eta$的长度, 也就是$|h|$. 由[[复曲线积分|此页面定理1]], 
>$$\left|\int_\eta{\psi(w)\,\d w}\right|\le\sup_{w\in\eta}{|\psi(w)|\cdot|h|}$$
>当$h\to 0$时, 上式趋于0, 因此
>$$\lim_{h\to 0}{\frac{F(z+h)-F(z)}{h}}=f(z)$$
>这也就证明了圆盘内函数$F$是函数$f$的原函数.

现在我们可以证明原定理在圆盘上的形式: 因为$f$具有原函数, 由[[复曲线积分|此页面推论1]]即得.

>[!cor] 推论2
>假设$f$在某开集内是[[全纯函数]], 且次开集包含圆周线$C$及其内部, 那么
>$$\oint_C{f(z)\,\d z}=0$$

