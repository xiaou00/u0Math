#分析 

>[!definition] Vitali覆盖
>设$E\subset\R$, $\Gamma=\set{I_\alpha}$是一个[[开区间|区间]]族, 若对任意$x\in E$以及$\epsilon>0$, 存在$I_\alpha\in\Gamma$, 使得$x\in I_\alpha$且$\diam{I_\alpha}<\epsilon$, 则称$\Gamma$是$E$的一个**Vitali覆盖**(Vitali cover). 
>※此处对区间的要求可以是开, 闭甚至半开闭的, 唯独不允许出现退化区间(单点).

>[!lemma] Vitali覆盖引理
>设$E\subset \R$, 且$m^*(E)<\infty$, 若$\Gamma$是$E$的Vitali覆盖, 则对任意$\epsilon>0$, 存在有限个互不相交的$I_j\in\Gamma$, $j=1,2,\ldots,n$, 使得
>$$m^*\left(E\setminus \bigcup_{j=1}^n{I_j}\right)<\epsilon$$

>[!proof]
>不失一般性, 设$\Gamma$中的元素全是闭区间 (否则取[[闭包与内部|闭包]]不改变结果, 因为端点零测). 作开集$G\supset E$使得$m(G)<\infty$. 我们可以对$\Gamma$中每个$I$取和$G$的交并不改变结论. 
>任选$I_1\in\Gamma$, 由归纳法挑选剩余的区间. 设已经选择了互不相交的区间$\enum Ik$, 若
>$$E\subset \bigcup_{i=1}^n{I_j}$$
>则定理无需再证. 否则, 令
>$$\delta_k=\sup\set{\diam I:I\in\Gamma; I\cap I_j=\O,j=1,2,\ldots,k}$$
>显然
>$$\delta_k\le m(G)<\infty$$
>我们一定可以选出一个集合$I_{k+1}\in\Gamma$, 满足
>$$\diam{I_{k+1}}>\frac12\delta_k,\quad I_{k+1}\cap I_j=\O(j=1,2,\ldots)$$
>继续这一过程, 可得互不相交的闭区间$\set{I_j}$, 且满足
>$$\sum_{j=1}^\infty{\diam{I_j}}\le m(G)<\infty$$
>由此可知, 对于任意的$\epsilon>0$, 存在$n$使得
>$$\sum_{j=n+1}^\infty{\diam{I_j}}<\epsilon/5$$
>令
>$$S=E\setminus\bigcup_{j=1}^n{I_j}$$
>下面证明$m^*(S)<\epsilon$, 设$x\in S$, 由于$\bigcup_{j=1}^n{I_j}$是闭集, 并且有$x\notin\bigcup_{j=1}^n{I_j}$, 故存在$I\in\Gamma$使得
>$$x\in I,I\cap I_j=\O(j=1,2,\ldots,n)$$
>显然$\diam I\le \delta_n<2\diam{I_{n+1}}$. 当$j\to\infty$时, $\diam{I_j}\to 0$, 从而$I$必与$\set{I_j}$中某个区间相交, 否则$I$的长度是确定的, 与选取过程矛盾, 即$\diam{I_{k+1}}>\frac12\delta_k$. 不妨记$n_0$是使得$\set{I_j}$与$I$相交的元素的最小下标, 则$n_0>n$, 且
>$$\diam I\le\delta_{n_0-1}<2\diam{I_{n_0}}$$
> 从而我们作区间$I_{n_0}'$, 与$I_{n_0}$同心且长度为其5倍, 即可使$I_{n_0}'$包含$x$. 对一切$j>n$都作对应的$I_j'$. 那么
> $$S\subset\bigcup_{j=n+1}^\infty{I'_j}$$
> 由此
> $$m^*(S)\le\sum_{j=n+1}^\infty\diam{I'_j}=5\sum_{j=n+1}^\infty{\diam{I_j}}<\epsilon$$
> 证毕.

>[!lemma] Vitali覆盖引理, 有限形式
>在一个[[度量空间]]中有一族闭球$B_1,\ldots,B_n$. 则存在一族互不相交的闭球$B_{i_1},\ldots,B_{i_n}$满足
>$$B_1\cup\cdots\cup B_n\subset 3B_{i_1}\cup\cdots\cup3B_{i_n}$$
>其中$3B$是同心三倍半径的球.

>[!proof]
>这个证明用了贪心的思想, 每次取出半径最大的球$B$, 删除所有与其有交的球(他们的半径一定小于选中的球, 因此一定包含于$3B$内), 如此往复就能得出一组解.

