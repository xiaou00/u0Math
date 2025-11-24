#ODE 

>[!definition] Bernoulli方程
>形如
>$$\dd xy+p(x)y=q(x)y^n\tag{E}$$
>的[[常微分方程|ODE]]称为**Bernoulli方程**(Bernoulli equation), 其中$n$为常数, 且$n\ne0$, $n\ne 1$ (否则退化).

##### 解法

1. 对于方程(E), 我们采取两边同乘$(1-n)y^{-n}$, 得
$$(1-n)y^{-n}\dd xy+(1-n)y^{1-n}p(x)=(1-n)q(x)$$
2. 换元$z=y^{1-n}$, 有
$$\dd xz+(1-n)p(x)z=(1-n)q(x)$$
3. 代入[[一阶线性微分方程]]的通解, 有
$$y^{1-n}=\e^{-(1-n)\int{p(x)\,\d x}}\left(C+(1-n)\int{q(x)\e^{(1-n)\int{p(x)\,\d x}}\,\d x}\right)$$
4. 当$n>0$时考虑$y=0$是否是方程的特解.

>[!ex] 例1
>解ODE
>$$\dd xy=6\frac yx-xy^3$$

>[!solution]
>显然这是$n=3$型Bernoulli方程
>$$\dd xy-\frac6xy=-xy^3$$
>同乘$-2y^{-3}$有
>$$-2y^{-3}\dd xy+\frac{12}{x}y^{-2}=2x$$
>令$z=y^{-2}$有
>$$\dd xz+\frac{12}xz=2x$$
>从而解线性方程得
>$$z=C\e^{-12\int{\frac{1}x\,\d x}}+\e^{-12\int{\frac{1}x\,\d x}}\int{2x\e^{12\int{\frac{1}x\,\d x}}\,\d x}$$
>解得
>$$z=Cx^{12}+\frac{x^{26}}{7}$$
>从而
>$$y^{-2}=Cx^{12}+\frac{x^{26}}{7}\iff\boxed{y^2=\frac{7x^{12}}{C+x^{14}}}$$

