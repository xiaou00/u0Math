#分析 
$$\DeclareMathOperator*{\LIM}{LIM}$$
设$B$是有界的无穷[[序列|实数列]]
$$x=(a_1,a_2,\ldots)$$
构成的空间, 容易验证其加法和标量乘法逐点定义时, $B$是实[[线性空间]]. 我们在$B$上定义函数$p$如下: 
$$p(x)=\limsup_{n\to\infty}{a_n}$$
由定义, $p$显然是**正齐次**的, 即
$$\lambda p(x)=p(\lambda x),\quad\forall x\in \R_+$$
并且是**次可加**的
$$p(x+y)\le p(x)+p(y)$$
下面我们定义$\mb A$为**左平移**, 即
$$\mb A(a_1,a_2,\ldots)=(a_2,a_3,\ldots)$$
由定义也能直接推出$p$是**平移不变**的, 即
$$p(\mb A x)=p(x)$$
---

设$Y$是由所有[[收敛(一般拓扑空间)|收敛]]的实数列构成的线性空间, 显然$Y$是$B$的线性子空间, 在$Y$上可以定义线性泛函$\ell$为
$$\ell(y)=\lim_{n\to\infty}{b_n},\quad y=(b_1,b_2,\ldots)$$
显然$\ell$是线性的, 并且
$$\ell=p|_Y$$
成立, 显然平移映射$\mb A$将$Y$映射到$Y$中, 且$\ell$平移不变, 即
$$\forall y\in Y,\ell(\mb A y)=\ell(y)$$
现在由[[Hahn-Banach定理变种]], 可以将$\ell$延拓到$B$中所有有界数列$x$上, 使得
1. $\ell$线性.
2. $\ell$平移不变.
3. $\ell$受$p$控制.

也就确保了下述定理:

>[!thm] Banach极限
>对于任何有界实数列, 存在一个**Banach极限**(Banach limit), 记为
>$$\LIM_{n\to\infty}{a_n}$$
>并且满足:
>1. 对于收敛的列$a_n$, $\LIM_{n\to\infty}{a_n}=\lim_{n\to\infty}{a_n}$.
>2. $$\LIM_{n\to\infty}{(a_n+b_n)}=\LIM_{n\to\infty}{a_n}+\LIM_{n\to\infty}{b_n}$$
>3. 对任意的$k$, $$\LIM_{n\to\infty}{a_{n+k}}=\LIM_{n\to\infty}{a_n}$$
>4. $$\liminf_{n\to\infty}{a_n}\le\LIM_{n\to\infty}{a_n}\le\limsup_{n\to\infty}{a_n}$$




