---
aliases:
  - Cauchy-Riemann条件
---
#分析 

考虑一个$\C$-[[全纯函数]]$f(z)=u(x,y)+\i v(x,y)$, 其中$z=x+\i y$. 由可微性, 不论$h$用什么方式趋于0, 差商的极限都一定相同. 于是我们选取$h$为实数值, 那么导数就变成了对$x$的偏导数, 即
$$f'(z)=\frac{\p f}{\p x}=\frac{\p u}{\p x}+\i\frac{\p v}{\p x}$$
同样地, 若选取$h$为纯虚数, 则
$$f'(z)=-\i\frac{\p f}{\p y}=-\i\frac{\p u}{\p x}+\frac{\p v}{\p x}$$
由此可知, $f(z)$必须满足[[偏微分方程|PDE]]
$$\frac{\p f}{\p x}=-\i\frac{\p f}{\p y}$$
它可以分解为
$$\frac{\p u}{\p x}=\frac{\p v}{\p y},\quad\frac{\p u}{\p y}=-\frac{\p v}{\p x}$$
上述方程组就称为**Cauchy-Riemann方程组**. 任何全纯函数的实部和虚部都满足该方程组. 他们的成立性是由$f'(z)$的存在性决定的. 我们也可以写出$f'(z)$的表达式
$$f'(z)=\frac{\p u}{\p x}+\i\frac{\p v}{\p x}$$

>[!thm] 定理1
>若$f=u+\i v$是定义在开集$\Omega$上的复函数, 如果$u,v$都具有连续的一阶偏导数并在$\Omega$上满足Cauchy-Riemann方程式, 那么$f$在$\Omega$上是全纯的, 并且$f'(z)=\frac{\d f}{\d z}$.

>[!pf]
>显然因为一阶导数连续必然可微, 令$h=h_1+\i h_2$, 由可微的定义,
>$$\begin{aligned}
u(x+h_1,y+h_2)-u(x,y)=\frac{\p u}{\p x}h_1+\frac{\p u}{\p y}h_2+|h|\psi_1(h)\\
v(x+h_1,y+h_2)-v(x,y)=\frac{\p u}{\p x}h_1+\frac{\p u}{\p y}h_2+|h|\psi_2(h)
\end{aligned}$$
>满足但$|h|$趋于0时, $\psi_i(h)\to0\,(i=1,2)$. 由Cauchy-Riemann方程式得
>$$f(z+h)-f(z)=\left(\frac{\p u}{\p x}-\i\frac{\p u}{\p y}\right)(h_1+\i h_2)+|h|\psi(h)$$
>其中当$|h|$趋于0时, $\psi(h)=\psi_1(h)+\psi_2(h)\to 0$, 因此$f$是全纯的并且
>$$f'(z)=2\frac{\p u}{\p z}=\frac{\p f}{\p z}$$

