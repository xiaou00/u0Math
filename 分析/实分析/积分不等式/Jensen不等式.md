#分析 

>[!theorem] Jensen不等式
>设[[测度空间]]$(X,\mc M,\mu)$, $\Omega\in M$且$\mu(\Omega)=1$, 若$g\in \ms{L}^1(\mu)$, $\varphi$为$g$定义域上的[[凸函数]], 则
>$$\varphi\left(\int_\Omega{g\,\d\mu}\right)\le\int_\Omega{\varphi\circ g\,\d\mu}$$
>若为凹函数, 则不等号反向.

>[!proof]
>令$x_0=\int_{\Omega}{g\,\d\mu}$由凸函数性质, 存在斜率$m$, 使得
>$$\varphi(g(x))\ge\varphi(x_0)+m(g(x)-x_0)$$
>对上式积分有
>$$\int_\Omega{\varphi\circ g\,\d\mu}\ge\int_\Omega{\varphi(x_0)\,\d\mu}+\int_\Omega{mg\,\d\mu}-\int_\Omega{mx_0\,\d\mu}$$
>代入$\mu(\Omega)=1$, 化简得
>$$\int_\Omega{\varphi\circ g\,\d\mu}\ge\varphi(x_0)+mx_0-mx_0=\varphi(x_0)$$
>回代$x_0$, 得
>$$\int_{\Omega}{\varphi\circ g\,\d\mu}\ge \varphi\left(\int_\Omega{g\,\d\mu}\right)$$
>证毕.

