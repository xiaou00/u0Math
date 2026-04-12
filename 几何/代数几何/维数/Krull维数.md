#代数几何 

Krull维数对于两个不同的对象: [[拓扑空间]] (尤其是[[Noether空间]]) 和[[环|交换环]].

>[!def] Krull维数
>对于拓扑空间 $X$, 定义 $X$ 的**Krull维数** (Krull dimension) 为链
>$$Z_0\supsetneq Z_1\supsetneq\cdots\supsetneq Z_r$$
>的最大长度, 其中每个 $Z_i$ 都是不可约闭子集(不能表成两个真闭子空间的并), 记作 $\dim X$. 对于环 $R$, 定义 $R$ 的**Krull维数**为[[素理想]]链
>$$\mathfrak p_0\subsetneq\mathfrak p_1\subsetneq\cdots\subsetneq\mathfrak p_n$$
>的最大长度 $n$. 记作 $\dim R$.

显然这两个定义在[[仿射概形]]上是相容的:

>[!thm] 定理1
>对于交换环 $A$, 有 $\dim\Spec~A=\dim A$.

>[!pf]
>设有 $\Spec~A$ 中的不可约闭集链:
>$$Z_0 \supsetneq Z_1 \supsetneq ... \supsetneq Z_n$$
>对每个 $Z_i$, 由于其为不可约闭集, 从而存在素理想 $\mf p_i$ 使得 $Z_i=V(\mf p_i)$. 显然
>$$Z_i\supsetneq Z_{i+1}\iff \mf p_i\subsetneq\mf p_{i+1}$$
>从而不可约闭集的真递降链对应素理想的真递降链, 证毕.

显然, 我们已经能够找出一些典型环的全部素理想:

- $k[t]$, 其素理想为 $(0)$ 和 $(f(t))$, 其中 $f(t)$ 是不可约多项式.
- $\Z$, 其素理想为 $(0)$ 和 $(p)$.
- $k$ (一个域), 只有 $(0)$.
- $k[x]/(x^2)$, 只有 $(x)$.

显然有 $\dim\Spec~k=0,\dim\Spec~k[x]/(x^2)=0$. $\dim\mathbb A^1_k=\dim\Spec~\Z=1$.

>[!warning] 注1
>在处理可约空间维数的概念是务必小心. 因为如果 $Z$ 是两个闭子集 $X,Y$ 的并, 则 $\dim Z=\max(\dim X,\dim Y)$. 因此维数不是空间的局部特征. 为了处理这个情况, 我们称一个拓扑空间是**纯维数** (puredimensional) 或**等维** (equidimensional) 的, 若每个不可约分量都有相同的维数.

接下来我们给出维数的一系列重要结论:

>[!thm] 定理1
>概形的维数为 $n$, 当且仅当他有仿射开覆盖, 仿射开子集覆的仿射片维数至多为 $n$, 且至少有一片维数恰好为 $n$.

>[!pf]
>若 $\dim X=n$, 则取任何仿射开覆盖 $\set{U_i=\Spec~A_i}$, 由于 $U_i\subset X$, 有 $\dim U_i\le\dim X=n$. 由于 $\dim X=n$, 存在长度为 $n$ 的不可约闭集链在 $S$ 中, 这条链与某个  $U_j$ 相交, 从而 $\dim U_j=n$.
>
>反之, 若存在这样的覆盖, 取 $X$ 中任何不可约闭集 $Z$, 那么 $Z$ 必然与某个 $U_i$ 交, 显然 $Z\cap U_i$ 是 $U_i$ 中的不可约闭集, 从而 $\dim Z\le \dim (Z\cap U_i)\le\dim U_i\le n$. 因此 $\dim X\le n$. 反向的不等式, 因为 $U_j\subset X$, 有 $\dim U_j\le\dim X$, 而 $\dim U_j=n$, 从而 $\dim X\ge n$. 证毕.

>[!thm] 定理2
>一个[[Noether概形]]是零维的当且仅当其有有限个点.

>[!thm] 定理3
>维数相同的整环之间的满射必定是同构.

>[!thm] 定理4 (整态射的纤维零维)
>设 $\pi:X\to Y$ 是[[整态射]], 则 $\pi$ 的每条非空的纤维的维数为 $0$.

>[!pf] Pf Sketch.
>由基变换可设 $Y=\Spec~k$. 只需证明若 $\phi:k\to A$ 是整扩张, 则 $\dim~A=0$. 假设 $\mf p\subset\mf m$ 是两个不同的素理想, 对 $\mf p$ 取商, 可假设 $A$ 是整环, $\mf p=(0)$. 接下来证明任何非零 $A$-元素可逆即可.

>[!thm] 定理5 (整扩张保持维数)
>设 $\phi:B\to A$ 对应一个整扩张, 则 $\dim\Spec~A=\dim\Spec~B$.

>[!thm] 定理6 (正规化保持维数)
>设 $\nu:\widetilde X\to X$ 是[[正规化]], 则 $\dim\widetilde X=\dim X$.

>[!thm] 定理7 (维数对于乘积是加性的)
>设 $X,Y$ 是不可约的 $k$-簇, 则 $\dim X\times_kY=\dim X+\dim Y$.
>

>[!thm] 定理8
>对于域 $k$, $\dim\mathbb A^n_k=n$.

