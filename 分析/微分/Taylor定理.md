#分析 

我们知道一元[[微分]]的定义:
$$f(x_0+\Delta x)=f(x)+\d f(x_0)(\Delta x)+o(\Delta x),\quad \Delta x\to 0$$
其核心思想就是用线性形式近似$f(x)$, 且误差为一个比$\Delta x$高阶的[[无穷小和无穷大|无穷小]]. 一个很自然的想法是, 当$f$二阶可微时, 是否可以用二次[[多项式]]来逼近$f(x)$, 使得其误差是比$\Delta x^2$高阶的无穷小?
##### 引例
设
$$f(x_0+\Delta x)=A+B\Delta x+C\Delta x^2+o(\Delta x^2),\quad \Delta x\to 0\tag{I}$$
我们逐一确定$A,B,C$. 令$x\to x_0$得
$$A=\lim_{\Delta x\to 0} f(x_0+\Delta x)=f(x_0)$$
于是(I)化为
$$\frac{\Delta f(x_0)}{\Delta x}=B+C\Delta x+o(\Delta x),\quad \Delta x\to 0$$
由于$f(x)$在$x_0$处可微, 从而令$\Delta x\to 0$得
$$B=\lim_{\Delta x\to 0}{\frac{\Delta f(x)}{\Delta x}}=\dd{x}{f(x_0)}=f'(x_0)$$
从而
$$C=\lim_{\Delta x\to 0}{\frac{\Delta f(x)-f'(x_0)(\Delta x)}{\Delta x^2}}\xlongequal{\text{l'H}}\frac12\lim_{\Delta x\to 0}{\frac{\Delta f'(x)}{\Delta x}}=\frac12 f''(x_0)$$
从而我们求出了待定系数, 它是唯一的, 即
$$f(x_0)+\d f(x_0)(\Delta x)+\frac12\d^2f(x_0)(\Delta x^2)$$
容易验证其余项满足条件.

>[!theorem] Taylor定理, 经典形式 (Taylor's Theorem, Classical Version)
>设一元实函数$f(x)$在$x_0$处$n$次可微, 则
>$$f(x)=r(x)+T_nf(x_0)(x)$$
>其中
>$$T_nf(x_0)(x)=\sum_{k=0}^n{\frac1{k!}f^{(k)}(x_0)(x-x_0)^k}$$
>称之为$f$在$x_0$处的$n$次**Taylor多项式**. 并且$r(x)$满足
>$$\lim_{x\to x_0}{\frac{r(x)}{(x-x_0)^n}}=0$$

>[!proof]
>用归纳法对$n$进行归纳, 显然当$n=1$时就是微分的基本定义. 假设对于$n=k$时命题成立, 
>$$\frac{\d T_{k+1}f(x_0)(x)}{\d x}=f'(x_0)+\frac1{1!}f''(x_0)(x-x_0)+\cdots+\frac1{k!}f^{(k+1)}(x_0)(x-x_0)^k=T_k\dd xf(x_0)(x)$$
>由[[l'Hôpital法则]]和归纳假设, 
>$$\lim_{x\to x_0}{\frac{f(x)-T_{k+1}f(x_0)(x)}{(x-x_0)^{k+1}}}=\frac1{k+1}\lim_{x\to x_0}{\frac{f'(x)-T_{k}f'(x_0)(x)}{(x-x_0)^{k}}}$$
>从而原命题成立.

>[!theorem] Taylor定理 (Taylor's Theorem)
>设底域为$\R$或$\C$的[[Banach空间]]$X,Y$, 映射$f:X\supset U\to Y$($U$是开集) 在$x_0\in X$处$n$次[[Fréchet微分|F-可微]], 则
>$$f(x)=r(x)+T_nf(x_0)(x)$$
>其中
>$$T_nf(x_0)(x)=\sum_{k=0}^n{\frac1{k!}\D^kf(x_0)[\Delta x]^k}$$
>称之为$f$在$x_0$处的$n$次**Taylor多项式**. 并且$\Delta x=x-x_0$, $r(x)$满足
>$$\lim_{\norm h_X\to 0}{\frac{\norm{r(x)}_Y}{\norm{h}_X^n}}=0$$

>[!tip] 注
>这里的$\D f(x)$是$X$到算子空间$\mc L(X,Y)$的映射, 而$\D^2 f(x)$是在同一点对其二次求微分的结果, 其结果属于$\mc L(X,\mc L(X,Y))$, 容易证明其同构于双重线性算子空间$\mc B(X\times X, Y)$. 参考[[高阶Fréchet微分]].
>同样地, $\D^n f$, 是到$\mc B(X^n,Y)$的映射, 因此$\D^n f(x)$有$n$个分量.
>上述定理中的$\D^k f(x_0)[\Delta x]^k$表示这$k$个分量全为$\Delta x$.
