#代数几何 

>[!def] Hom
>给定概形 $X$ 上的两个 $\mc O_X$-模层 $\mc F$ 和 $\mc G$, 其[[Hom层]]记作 $\HomS_{\mc O_X}(\mc F,\mc G)$, 定义
>$$\HomS_{\mc O_X}(\mc F,\mc G)(U)=\Hom_{\mc O_U}(\mc F|_U,\mc G|_U)$$
>右边是由模同态构成的模. 上述定义无需[[层化]]直接构成一个层.

- Hom是[[正合函子|左正合函子]], 他是[[平衡函子]], 因此对于任何变元求导等效 (要求).

###### 局部自由层情形

>[!thm] 定理1
>设 $\mc F,\mc G$ 是 $X$ 上秩 $m,n$ 的局部自由层, 则 $\HomS_{\mc O_X}(\mc F,\mc G)$ 是 $X$ 上秩 $mn$ 的局部自由层.

>[!pf]
>设 $\mc F,\mc G$ 都是局部自由层, 任取一点 $x\in X$, 我们有:
>- $x$ 的一个开邻域 $V$ 使得 $\mc F$ 在 $V$ 上平凡, 即 $\mc F|_V\simeq\mc O^{\oplus m}_V$.
>- $x$ 的一个开邻域 $W$ 使得 $\mc G$ 在 $W$ 上平凡, 即 $\mc G|_W\simeq\mc O^{\oplus n}_W$.
>
>不妨取其交集 $U=V\cap W$, 因为开集的交集依然是开集, 并且包含 $x$, 所以 $U$ 是 $x$ 的一个开邻域, 在这个公共开集 $U$ 上, $\mc F$ 和 $\mc G$ 上同时是自由模:
>- $\mc F|_U\simeq\mc O_U^{\oplus m}$.
>- $\mc F|_U\simeq\mc O_U^{\oplus n}$.
>
>由于 $\HomS$ 与"限制到开集"是交换的, 我们有
>$$\HomS_{\mc O_X}(\mc F,\mc G)|_U\simeq\HomS_{\mc O_U}(\mc O_U^{\oplus m},\mc O_U^{\oplus n})$$
>我们利用 $\HomS$ 的函子性来拆解: 由于有限直和在 $\HomS$ 的第一个变量中可以直接提出, 从而
>$$\HomS_{\mc O_U}\left(\bigoplus_{i=1}^m{\mc O_U},\mc O_U^{\oplus n}\right)\simeq\bigoplus_{i=1}^m\HomS_{\mc O_U}(\mc O_U,\mc O_U^{\oplus n})$$
>对任意的 $\mc O_U$-模层 $\mc H$, 都有一个典范同构 $\HomS_{\mc O_U}(\mc O_U,\mc H)\simeq\mc H$, 因此
>$$\HomS_{\mc O_U}(\mc O_U,\mc O_U^{\oplus n})\simeq\mc O_U^{\oplus n}$$
>从而
>$$\bigoplus_{i=1}^m\HomS_{\mc O_U}(\mc O_U,\mc O_U^{\oplus n})\simeq\mc O_U^{\oplus(m\times n)}$$
>证毕.

>[!thm] 定理2 (*Hom*保持第一个变元的有限直和)
>对于模层 $\mc F,\mc G$, 我们必然有 $\HomS(\mc F^{\oplus p},\mc G)=\HomS(\mc F,\mc G)^{\oplus p}$.

>[!thm] 定理3 (*Hom*(fpr,qcoh)是qcoh的)
>设 $\mc F$ 是一个[[有限表示]]的 $X$ 上的拟凝聚层, $\mc G$ 是 $X$ 上的一个拟凝聚层, 则 $\HomS(\mc F,\mc G)$ 是一个拟凝聚层.

>[!pf]
>由于qcoh(拟凝聚)是一个仿射局部性质, 我们取 $X$ 的仿射开集 $U=\Spec A$, 在这个开集上, 拟凝聚层 $\mc F|_U$ 和 $\mc G|_U$ 对应于 $A$-模 $M$ 和 $N$. 即
>$$\mc F|_U\simeq\widetilde M,\quad \mc G|_U\simeq\widetilde N$$
>由于 $\mc F$ 有限表示, 在更细的仿射开集 $U=\Spec A$ 上, 模 $M$ 存在一个有限表示, 也就是下面的正合列
>$$A^{\oplus q}\to A^{\oplus p}\to M\to 0$$
>其中 $p,q$ 是自然数, 对其作用反变函子 $\HomS(-,\mc G)$, 有
>$$0\to \HomS(\mc F|_U,\mc G|_U)\to\HomS(\mc O_U^{\oplus p},\mc G|_U)\to\HomS(\mc O_U^{\oplus q},\mc G|_U)$$
>由于 $\HomS(\mc O_U,\mc G|_U)\simeq\mc G|_U$ 和定理2, 正合列转化为
>$$0\to\HomS(\mc F|_U,\mc G|_U)\to\mc G|_U^{\oplus p}\to\mc G|_U^{\oplus q}$$
>显然, 这表明 $\HomS(\mc F|_U,\mc G|_U)$ 是拟凝聚层态射 $\mc G|_U^{\oplus p}\to \mc G|_U^{\oplus q}$ 的核, 从而是拟凝聚层.

>[!cor] 推论4 (*Hom*(fpr,coh)是coh的)
>设 $\mc F$ 是有限表示层且 $\mc G$ 是凝聚的, 则 $\HomS(\mc F,\mc G)$ 是一个凝聚层.

