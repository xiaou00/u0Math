#代数几何 

>[!def] 消失集 $V$ : 代数->几何
>对于[[环|交换环]] $A$ 的[[理想]] $J$, (或子集 $S\subset A$, 对应到理想 $\langle S\rangle$). 有
>$$V(J)=\set{\mathfrak p\in\Spec(A)\mid J\subset\mathfrak p}$$
>即包含 $J$ 的所有点 $\mathfrak p$. (让 $J$ 取 $0$ 的所有点)

>[!def] 理想 $I$ : 几何->代数
>设 $\Spec(A)$ 的点集 $S$, 定义
>$$I(S)=\bigcap_{\mathfrak p\in S}\mathfrak p$$
>为在 $S$ 上所有点都消失的函数.

我们有如下性质:

>[!thm] 定理1 (Hilbert零点定理)
>对于 $A$ 的理想 $J$, $I(V(J))=\sqrt J$.

>[!thm] 定理2 (Zariski闭包)
>对于 $\Spec(A)$ 的子集 $S$, 有 $V(I(S))=\overline{S}$ 为[[Zariski闭包]].




