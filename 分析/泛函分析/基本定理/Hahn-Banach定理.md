---
aliases:
  - H-B定理
---
#分析 

>[!thmhn-Banach定理 (Hahn-Banach Theorem)
>设$X$是实[[线性空间]], 设[[泛函]]$p:X\to\R$满足对任意$x,y\in X$和正实数$\lambda$都有
>1. 次可加性: $p(x+y)\le p(x)+p(y)$
>2. 齐次性: $p(\lambda x)=\lambda p(x)$
>
>设$Y$是$X$的[[线性子空间]], $\ell$是$Y$上受$p$控制的一个[[线性泛函]], 即对任意$y\in Y$满足
>$$\ell(y)\le p(y)$$
>**我们断言:** $\ell:Y\to\R$ 可以延拓为$X$上受$p$控制的线性泛函$\ell:X\to\R$ ($\ell\in X^*$), 即满足对任意$x\in X$, 有
>$$\ell(x)\le p(x)$$

>[!pf]
>不妨设$Y$不是整个$X$ (否则证明是平凡的). 不妨设$z\in X\setminus Y$, 并且记$Z=\span{Y\cup\set{z}}$. 也即
>$$Z=\set{y+az\mid y\in Y, a\in\R}$$
>我们的目标是把$\ell$延拓为$Z$上的一个线性泛函, 使得$\ell(x)\le p(x)$对任意$x\in Z$成立. 也就是说, 对于$Y$中所有的$y$和实数$a$都有
>$$\ell(y+az)=\ell(y)+a\ell(z)\le p(y+az)$$
>由条件, 上述不等式对于$a=0$的时候恒成立 (此时退化到空间$Y$上), 由于$p$是正齐次的, 我们只需证明上述不等式对于$a=\pm 1$成立:
>$$\ell(y)+\ell(z)\le p(y+z),\quad\ell(y')-\ell(z)\le p(y'-z)$$
>简单的代数变形可知, 这等价于对任意$y,y'\in Y$都有
>$$\ell(y')-p(y'-z)\le\ell(z)\le p(y+z)-\ell(y)$$
>恒成立, 这样的$\ell(z)$存在当且仅当对任意$y,y'\in Y$都有
>$$\ell(y')-p(y'-z)\le p(y+z)-\ell(y)\tag{I.I}$$
>这等价于
>$$\ell(y')+\ell(y)=\ell(y'+y)\le p(y+z)+p(y'-z)\tag{I.II}$$
>由线性子空间的封闭性, $y+y'\in Y$, 从而由条件
>$$\ell(y'+y)\le p(y+y')\tag{II}$$
>由$p$的次可加性, 
>$$p(y+y')=p(y+z+y'-z)\le p(y+z)+p(y'-z)\tag{III}$$
>结合(II), (III)就推出了(I.II), 从而也就推出了(I.I). 这说明我们可以把$\ell$延拓到$Z$上, 并且使得约束条件成立.
>
>现在考虑集族
>$$\ms F=\set{\,(Z,\bar\ell):Z\supset Y;\, Z<X\,\text{(子空间)};\,\ell\text{在}Z\text{上的延拓}\bar\ell\text{仍然恒满足}\bar\ell(x)\le p(x)\,}$$
>我们可以在$\ms F$上定义一个偏序:
>$$(Z,\ell)\le(Z',\ell')$$
>当且仅当$Z\subset Z'$且$\ell'|_Z=\ell$, 也即$(Z,\ell)$是一个同样但范围更小的延拓. 
>不妨设$\set{Z_\nu,\ell_\nu}$是$\ms F$中的一个全序子集, 显然我们可以定义$Z=\bigcup{Z_\nu}$, 并定义$\ell$满足对任意$\nu$, $\ell|_{Z_\nu}=\ell_\nu$. 显然其满足条件, 并且对任意$\nu$都有$(Z_\nu,\ell_\nu)\le(Z,\ell)$. 这就证明了$\ms F$的每个链都存在上界, 由[[Zorn引理]], $\ms F$中存在极大的延拓, 那么根据前讨论, 极大延拓必定是在完整空间$X$上的延拓 (不然可以重新取$z\in X\setminus Y$生成更大的延拓, 与极大性矛盾). 证毕.

>[!cor] 推论1
>设$X$是一个实[[赋范空间]], 对于任意非零向量$v\in X$, 那么存在一个[[有界线性算子|有界线性]][[泛函]]$\ell\in X^*,\ell:X\to\R$. 使得
>1. $\ell(x)=\lVert{x}\rVert_X$.
>2. $\lVert{\ell}\rVert_{\rm op}=1$.

>[!pf]
>考虑$v$生成的一维线性子空间 $M\subset X$ , 其中
>$$M=\span\set{v}=\set{\,kx\mid k\in \R\,}$$
>在$M$上定义一个初始的线性泛函$\ell_0:M\to R$为: 对任意$x\in M$, $x=kv$, 那么$\ell_0(x)=k\lVert{v}\rVert_X$. 显然它是线性的, 并且$\ell_0(v)=1\cdot\lVert{v}\rVert_X=\lVert{v}\rVert_X$. 并且由范数的齐次性
>$$|\ell_0(x)|=\big|k\lVert{v}\rVert_X\big|=|k|\cdot\lVert{v}\rVert_X=\lVert{kv}\rVert_X=\lVert{x}\rVert_X$$
>因此在子空间$M$上
>$$\norm{\ell_0}_{\mathrm{op},M}=\sup_{x\in M\setminus\set{0}}{\frac{|\ell_0(x)|}{\lVert{x}\rVert_X}}=\frac{\lVert{x}\rVert_X}{\lVert{x}\rVert_X}=1$$
>显然
>$$\ell_0(x)=k\lVert{v}\rVert_X\le|k|\cdot\lVert{v}\rVert_X=\lVert{x}\rVert_X$$
>并且范数满足次可加性和齐次性, 由H-B定理, 可以将$\ell_0$延拓到整个空间$X$, 记为$\ell$, 并且$\ell$满足$\ell(x)\le\lVert{x}\rVert_X$. 不难验证其为有界的, 并且
>$$\norm{\ell}_{\rm op}=\sup_{x\in X\setminus\set{0}}{\frac{|\ell(x)|}{\lVert{x}\rVert_X}}\le\sup_{x\in X\setminus\set{0}}{\frac{\lVert{x}\rVert_X}{\lVert{x}\rVert_X}}=1$$
>然而在$\ell_0=\ell|_M$上有$\lVert{\ell_0}\rVert_{\mathrm{op},M}=1$, 因此$\norm{\ell}_{\rm op}\ge 1$, 综上$\norm{\ell}_{\rm op}=1$. 

※H-B定理常用的应用范式是, 先构造一维子空间上的线性泛函, 然后对其进行延拓.