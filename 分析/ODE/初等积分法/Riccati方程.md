#ODE 

>[!definition] Riccati方程
>形如
>$$\dd xy=p(x)y^2+q(x)y+r(x)\tag{E}$$
>的[[常微分方程|ODE]]称为**Riccati方程**(Riccati equation), 其中$p,q,r$皆为开集$U$上的[[连续映射|连续函数]].且$p(x)\not\equiv0$(否则退化).

##### 求解

对于Riccati方程(E), 若我们能注意到一个[[特解]]$y=\varphi(x)$, 则可以用以下方法求解:

1. 作变换$y=z+\varphi(x)$, 方程变为
$$\dd xz+\dd x\varphi=p(x)[z^2+2\varphi(x)z+\varphi(x)^2]+q(x)[z+\varphi(x)]+r(x)$$
化简得
$$\dd xz+\textcolor{red}{\dd x\varphi}=p(x)z^2+2p(x)\varphi(x)z+\textcolor{red}{p(x)\varphi(x)^2}+q(x)z+\textcolor{red}{q(x)\varphi(x)}+\textcolor{red}{r(x)}$$
2.  因为$\varphi(x)$是方程(E)的解, 从而消去上式中标红的项, 方程化成
$$\dd xz=p(x)z^2+[2p(x)\varphi(x)+q(x)]z$$
整理得
$$\dd xz-[2p(x)\varphi(x)+q(x)]z=-p(x)z^2$$
3. 上式为2阶的[[Bernoulli方程]]. 用Bernoulli方程的解法继续即可.

>[!ex] 例1
>求解ODE
>$$y'\e^{-x}+y^2-2y\e^x=1-\e^{2x}$$

>[!solution]
>变形得
>$$y'+\e^xy^2-2\e^{2x}y=\e^x-\e^{3x}$$
>显然这是一个Riccati方程, 注意到$y=\e^x$是一个解, 令$y=x+\e^x$, 方程化为
>$$z'+\e^xz^2=0$$
>该方程通解为
>$$z=\frac1{\e^x+C}$$
>从而原方程的解为
>$$\boxed{y=\frac1{\e^x+C}}+\e^x$$
