#点集拓扑 #分离公理 

在讨论[[收敛(一般拓扑空间)|一般拓扑空间上的收敛]]时, 我们发现一般[[拓扑空间]]上的点列可能会收敛到多个点. 虽然是个很有趣的事实, 但并没有很高的研究价值, 因为它们很少出现. 我们常常对讨论的拓扑空间附加一些条件, 使得它更加几何直观:

>[!definition] Hausdorff空间 (T2)
>对于拓扑空间$(X,\T)$中的任意两个相异的点$x_1,x_2$, 总存在$x_1,x_2$的[[邻域]]$U_1,U_2$使其无交. 即$$\forall x_1,x_2\in X(x_1\ne x_2\implies\exists U_1\in\T\land x_1\in U_1,U_2\in\T\land x_2\in U_2(U_1\cap U_2=\O))$$
>称上述条件为**Hausdorff条件(T2)**, 满足Hausdorff条件的拓扑空间$X$称作一个**Hausdorff空间**(Hausdorff space).

Hausdorff空间中有众多优越的性质, 例如

>[!theorem] 定理1 (Hausdorff空间蕴含T1公理)
>Hausdorff空间$X$中的任何有限集都是闭集.

>[!proof]
>只需证明任意单点集$\set{x}$是闭集即可. 设$X\ni x'\ne x$, 由Hausdorff空间定义知$x,x'$分别有无交的邻域$U,V$. 由于$V$不交$U$, 故$V$不交$\set{x}$, 由[[闭包与内部|此页面的定理2]]易得$x'$不属于$\set{x}$的闭包, 从而$\set{x}$的闭包就是$\set{x}$. 从而$\set{x}$是闭集.
>显然闭集的有限并仍然是闭集.

有限点集都是闭集这一条件实际上是比Hausdorff条件弱的条件. 例如[[实数]]轴$\R$的[[有限补拓扑]]并不是一个Hausdorff空间, 但其所有有限点都是闭集. 这个条件也有个名字, 称为 **$T_1$公理** ($T_1$ axiom).

>[!theorem] 定理2
>设拓扑空间$X$满足T1公理, $A$是$X$的一个子集, 则$x$是$A$的极限点当且仅当$x$的每一个邻域与$A$的交都是无限集.

>[!proof]
>设$x$的任意邻域交$A$于无限点, 显然$x$的任意邻域必交$A$于异于$x$的点, 从而$x$是$A$的极限点.
>反之, 设$x$是$A$的一个极限点且$x$的某邻域$U$与$A$相交于有限多个点, 从而$U$与$A-\set{x}$也相交于有限多个点. 不妨设$U\cap(A-\set{x})=\set{\enum{x}{n}}$, 由$T_1$公理, 任意有限集都是闭集, 从而$\set{\enum{x}{n}}$是闭集, 即$X-\set{\enum{x}{n}}$是开集. 从而
>$$U\cap(X-\set{\enum{x}{n}})$$
>就是与$A-\set{x}$无交的$x$的邻域, 这与$x$为极限点的假设矛盾. 

>[!theorem] 定理3
>1. 每一个具有[[序拓扑]]的全序集是Hausdorff空间.
>2. 两个Hausdorff空间的[[二元积拓扑]]是Hausdorff空间.
>3. Hausdorff空间的[[子空间拓扑]]是Hausdorff空间

>[!proof]
>令$X$是一个具有序拓扑的全序集, 任取$x_1,x_2\in X$使$x_1\ne x_2$, 不妨设$x_1<x_2$, 且$x_1$非最小元, $x_2$非最大元. 若$x_2$是$x_1$的[[开区间|紧接后元]], 则一定存在$x_1'<x_1,x_2'>x_2$, $x_1,x_2$邻域$(x_1',x_2),(x_1,x_2')$总无交 (若为最小/大元则改为$[x_1,x_2),(x_1,x_2]$).
>若非紧接后元, 则一定存在$x_1<x_3<x_2$, 令$x_1'<x_1,x_2'>x_2$, 则$(x_1',x_3),(x_3,x_2')$总无交 (若为最小/大元则改为$[x_1,x_3),(x_3,x_2]$).
>因此具有序拓扑的全序集一定是Hausdorff空间.
>
> ---
> 令$X,Y$是Hausdorff空间, $Z=X\times Y$是积拓扑. 任取$z_1,z_2\in Z$, $z_1\ne z_2$. 分别取其在$X,Y$上的[[投射]]:
> 令$x_1=\pi_1(z_1),x_2=\pi_1(z_2)$, 显然由于$X$是Hausdorff空间, $X$上存在$x_1,x_2$的邻域$U_1,U_2$无交.
> 令$y_1=\pi_2(z_1),y_2=\pi_2(z_2)$, 显然由于$Y$是Hausdorff空间, $Y$上存在$y_1,y_2$的邻域$V_1,V_2$无交.
> 显然$U_1\times V_1$是$z_1$的邻域, $U_2\times V_2$是$z_2$的邻域, 并且它们无交. 故$X\times Y$也是Hausdorff空间.
> 
> ---
> 令$Y$是Hausdorff空间$X$的一个子空间, 任取$y_1,y_2\in Y$且$y_1\ne y_2$, 取其在$X$中不相交的邻域$U_1,U_2\subset X$, 显然$U_1\cap Y, U_2\cap Y$也不交, 故$Y$是Hausdorff空间.

>[!hint] 练习1
> 求证: $X$是一个Hausdorff空间当且仅当其对角线$\Delta=\set{(x,x)|x\in X}$是$X\times X$的闭集.

>[!proof]
>要证明$\Delta$是闭集, 即证明$\Delta=\clos{\Delta}$. 即, 对于任意$(x,y)\notin\Delta$($x\ne y$), 存在一个邻域与$\Delta$不交(*这是[[闭包与内部|此页面定理2]]的$(\lnot P)\iff(\lnot Q)$形式, 结合$\Delta\subset\clos{\Delta}$得到*). 由Hausdorff条件, 任意相异的点总存在不交的邻域. 于是立即得到$\Delta$是闭集成立.
>
>---
>要证明$X$满足Hausdorff条件, 任取$x,y \in X,x\ne y$, 从而$(x,y)\notin\Delta$, 故$(x,y)\in X\times X-\Delta:=W$, 由于$W$是$X\times X$中的开集($\Delta$是闭集), 因此由积拓扑性质, 存在$x$的邻域$U\subset X$以及$y$的领域$V\subset X$使得$(x,y)\in U\times V\subset W$ (积拓扑的所有开集由子空间开集的积作为基组成).
>假设存在$z\in U\cap V$, 那么$(z,z)\in U\times V$这与$U\times V\subset W=X\times X-\Delta$矛盾, 故$U\cap V=\O$. 综上我们构造了合法的邻域$U,V$, 故$X$是Hausdorff空间.
