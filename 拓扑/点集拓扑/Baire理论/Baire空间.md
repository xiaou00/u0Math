#点集拓扑 

>[!definition] Baire空间
>对于[[拓扑空间]]$X$, 若给定$X$的任意可数闭集族$\set{A_n}$, 如果其中每个集合在$X$中都有[[空内部]], 那么他们的并$\bigcup{A_n}$在$X$中也一定有空内部, 就称$X$是一个**Baire空间**(Baire space).

>[!ex2] 例1
>有理数空间$\Q$不是Baire空间, 因为$\Q$的单点集为闭集, 并且在$\Q$中有空内部. 但$\Q$是其单点子集的可数并 ($\Q$作为全集是开集, 内部为自身).

>[!ex] 例2
>空间$\Z_+$是一个Baire空间, 因为$\Z_+$的任意子集都是开集, 除了空集外, $\Z_+$的任何子集都有非空内部 (空集是唯一拥有空内部的集合), 也就是说$\Z_+$其实也满足Baire条件.

上述定义, 是Baire空间的「闭集定义」, 显然, 还有一种「开集定义」也经常使用:

>[!definition] Baire空间 (等价定义)
>对于空间$X$, $X$是**Baire空间**当且仅当, 给定$X$中开集的任意可数族$\set{U_n}$, 若每个$U_n$在$X$中稠密, 则交$\bigcap{U_n}$也在$X$中稠密.

>[!proof]
>显然$A$是$X$中闭集当且仅当$X-A$是$X$中开集, $B$在$X$中有空内部当且仅当$X-B$在$X$中稠密.

>[!theorem] 定理1
>Baire空间$X$的任何开子空间$Y$也是Baire空间.

>[!proof]
>设$A_n$是$Y$中有空内部闭集的一个可数族, 下面证明$\bigcup{A_n}$在$Y$中有空内部.
>
>设$\clos{A_n}$是$A_n$在$X$中的闭包, 则$\clos{A_n}\cap Y=A_n$. 于是$\clos{A_n}$在$X$中有空内部. 因为若$U$是$X$中包含于$\clos{A_n}$的非空开集, 则$U$一定与$A_n$相交, 这导致$U\cap Y$是$Y$中包含在$A_n$中的一个非空开集, 与假设矛盾.
>
>若集合$A_n$的并包含$Y$中的非空开集$W$, 则$\clos{A_n}$的并也包含着$W$. 由于$Y$在$X$中是开的, $W$在$X$中也是开的. 但是每个集合$\clos{A_n}$在$X$中有空内部, 这与$X$是Baire空间矛盾.

>[!theorem] 定理2
>设$X$是一个空间,  $(Y,d)$是一个度量空间, 设$f_n:X\to Y$是一个连续函数列, 使得对所有的$x\in X$都有$f_n(x)\to f(x)$, 其中$f:X\to Y$. 如果$X$是一个Baire空间, 那么使得$f$连续的点构成的集合在$X$中稠密.

>[!proof]
>给定正整数$N$和$\epsilon>0$, 定义
>$$A_B(\epsilon)=\set{x\mid d(f_n(x),f_m(x))\le\epsilon,\,\forall n,m\ge N}$$
>我们注意到$A_N(\epsilon)$在$X$中是闭集, 因为由$f_n,f_m$的连续性可见, 满足$d(f_n(x),f_m(x))\le \epsilon$的点的集合在$X$中是一个闭集, 而$A_N(\epsilon)$是对于任意$n,m$的这些集合的交, 即
>$$A_N(\epsilon)=\bigcap_{n,m\ge N}\set{x\mid d(f_n(x),f_m(x))\le \epsilon}$$
>对于固定的$\epsilon$, 考虑套序列$A_1(\epsilon)\subset A_2(\epsilon)\subset\cdots$, 这些集合的并为$X$.  因为任意给定$x_0\in X$由于$f_n(x_0)\to f(x_0)$可得序列$f_n(x_0)$是一个Cauchy列. 因此对于某一个$N$, 有$x_0\in A_N(\epsilon)$.
>
>现在设
>$$U(\epsilon)=\bigcup_{N\in\Z_+}{\interior{A_N(\epsilon)}}$$
>下面我们证明两个结论:
>1. $U(\epsilon)$是$X$中的一个稠密开集.
>2. 函数$f$在集合$C=U(1)\cap U(1/2)\cap U(1/3)\cap \cdots$中的每一处连续.
>
>由此推出定理成立
>
>为了证明$U(\epsilon)$在$X$中稠密, 需要证明对于$X$的任意一个非空开集$V$, 存在$N$使得$V\cap\interior{A_N(\epsilon)}$非空. 注意到对每一个$N$, $V\cap A_N(\epsilon)$在$V$中是闭的, 因为根据定理1可见$V$是一个Baire空间, 所以至少存在一个这种集合, 不妨设为$V\cap A_M(\epsilon)$, 必包含$V$中的非空开集$W$. 因为$V$在$X$中是开的, 所以$W$也是$X$中的开集, 因此它包含于$\interior{A_N(\epsilon)}$.
>
>下面证明若$x_0\in C$则$f$在点$x_0$处连续. 给定$\epsilon>0$, 我们来找$x_0$的一个邻域$W$使得对于$x\in W$, $d(f(x),f(x_0))<\epsilon$.
>首先选取$k$使得$1/k<\epsilon /3$. 因为$x_0\in C$, 所以$x_0\in U(1/k)$. 因此存在某一个$N$使得$x_0\in\interior{A_N(1/k)}$. 最后由$f_N$的连续性可以找到$x_0$的一个邻域$W$包含于$A_N(1/k)$, 使得
>$$d(f_N(x),f_N(x_0))< \frac{\epsilon}{3},\quad x\in W\tag{*}$$
>根据$W\subset A_N(1/k)$有
>$$d(f_n(x),f_N(x))\le \frac{1}{k},\quad n\ge N,x\in W\tag{**}$$
>令$n\to\infty$有不等式
>$$d(f(x),f_N(x))\le \frac{1}{k}< \frac{\epsilon}{3},\quad x\in W\tag{***}$$
>结合(\*),(\*\*)和(\*\*\*), 由三角不等式就证明了结论.

