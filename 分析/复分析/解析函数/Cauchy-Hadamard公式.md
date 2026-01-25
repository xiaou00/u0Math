#分析 

>[!thmuchy-Hadamard公式
>设以$z_0$为中心的$\C$-[[幂级数]]
>$$\sum_{n=0}^\infty{c_n(z-z_0)^n}$$
>其中$c_n$是复系数, $z$是复变量. 那么其收敛半径$R$为
>$$R=\frac{1}{\limsup_{n\to\infty}{\sqrt[n]{|c_n|}}}$$
>若$\limsup_{n\to\infty}{\sqrt[n]{|c_n|}}=0$, 则$R=\infty$, 级数在整个复平面收敛.
>若$\limsup_{n\to\infty}{\sqrt[n]{|c_n|}}=\infty$, 则$R=0$, 级数只在$z=z_0$收敛.

>[!pf]
>令$L=1/R$, 其中$R$是上述定义的收敛半径.  对于级数
>$$\sum_{n=0}^\infty{c_n}$$
>如果$L<1$, 由[[根植判别法]], 级数绝对收敛. 如果$L>1$, 则级数发散. 考虑将其应用于幂级数
>$$\sum_{n=0}^\infty{c_n(z-z_0)^n}$$
>的各项, 此处$a_n=c_n(z-z_0)^n$, 计算$L$有
>$$L=\limsup_{n\to\infty}{\sqrt[n]{|c_n(z-z_0)^n|}}=\limsup_{n\to\infty}\left(\sqrt[n]{|c_n|}|z-z_0|\right)=|z-z_0|\cdot\ell$$
>其中$\ell=\limsup_{n\to\infty}{\sqrt[n]{|c_n|}}$. 那么级数收敛的条件为$L<1$, 即
>$$|z-z_0|\ell<1$$
>若$\ell\in(0,+\infty)$, $|z-z_0|<1/\ell$, 收敛半径为$R=\frac{1}{\limsup_{n\to\infty}{\sqrt[n]{|c_n|}}}$.
>若$\ell=0$, $|z-z_0|\cdot0<1$, 对全体$|z-z_0|$成立, $R=\infty$.
>若$\ell=\infty$, $R=0$显然成立. 同样的方法可以证明$L>1$发散的情况.

>[!cor] 推论1
>幂级数的导数依然是幂级数, 且收敛半径不变.

