s#代数几何 

>[!thm] 射影空间的Jacobi判别法
>[[射影空间]] $\mathbb P^n_k$ 中的[[超曲面]] $V_+(f)$ 的[[光滑概形|非光滑点]]就是满足
>$$f=\frac{\p f}{\p x_0}=\cdots=\frac{\p f}{\p x_n}=0$$
>的点. 若 $V_+(f)$ 的度数 $d$ 不能被 $\char k$ 整除 (例如 $\char k=0$), 则这等价于 
>$$\frac{\p f}{\p x_0}=\cdots=\frac{\p f}{\p x_n}=0$$
>的检验.

>[!pf]
>设点 $p=[a_0:\ldots:a_n]$ 是超曲面 $V_+(f)$ 上的一个非光滑点, 因为 $p$ 在射影空间 $\mathbb P^n_k$ 中, 齐次坐标中至少有一个非零. 不失一般性, 假设 $a_0\ne 0$.
>
>不失一般性, 不妨限制到 $U_0=\set{x_0=1}\simeq\mathbb A^n$ 上, 此时超曲面由
>$$g(y_1,\ldots,y_n)=f(1,y_1,\ldots,y_n)$$
>定义, 其中 $y_i=x_i/x_0$. 此时仿射坐标为 $p'=(a_1/a_0,\ldots,a_n/a_0)$. 由[[Jacobi判别法]], $p'$ 是 $V(g)$ 的非光滑点当且仅当 $g(p')=0$ 且 $\dfrac{\p g}{\p y_i}(p')=0$ 对所有 $i=1,\ldots,n$.
>
>由链式法则, $\dfrac{\p g}{\p y_i}=\dfrac{\p f}{\p x_i}$, 于是上述等价于在齐次坐标下 $f(p)=0$ 且 $\dfrac{\p f}{\p x_i}(p)=0$. 由Euler齐次恒等式
>$$d\cdot f(p)=a_0\frac{\p f}{\p x_0}(p)+\sum_{i=1}^na_i\frac{\p f}{\p x_i}(p)$$
>将之前的结果代入, 有 $\dfrac{\p f}{\p x_0}(p)=0$. 特别地, 当 $\char k\nmid d$ 时, 容易证明 $f=0$ 可以被偏导数推导出来.

