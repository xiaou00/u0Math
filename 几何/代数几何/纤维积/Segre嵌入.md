#代数几何 

我们来描述 $A$-[[射影概形]]在 $A$ 上的乘积, 事实上我们只需要描述 $\mathbb P^m_A\times_A\mathbb P^n_A$, 因为任何射影 $A$-概形都可以表示成到[[射影空间]]的一个闭嵌入. ( 若 $X\into\mathbb P^m_A$ 和 $Y\into\mathbb P^n_A$ 是闭嵌入, $X\times_AY\into\mathbb P^m_A\times_A\mathbb P^n_A$ 亦然 ).

不妨考虑一种特殊情形, 将 $\mathbb P^2$ 和 $\mathbb P^1$ 中的点 $[x_0,x_1,x_2]\times[y_0,y_1]$ 送到 $\mathbb P^5$ 中的点, 其次坐标就是乘法表的各项
$$\begin{pmatrix}
x_0y_0&x_1y_0&x_2y_0\\
x_0y_1&x_1y_1&x_2y_1
\end{pmatrix}$$
这确实是一个良定义的态射, 并且上面的矩阵还是秩为 $1$ 的. 从这个矩阵的信息中, 我们可以还原出 $[x_0,x_1,x_2]$ 和 $[y_0,y_1]$ (在模去非零标量的意义下). 例如为了读出点 $[x_0,x_1,x_2]\in\mathbb P^2$, 我们可以取第一行, 除非全为零我们再取第二行 (不可能同时为 0 ). 事实上, 给定一个 $\mathbb P^m$ 的点和一个 $\mathbb P^n$ 的点, 我们能够导出一个 $\mathbb P^{mn+m+n}$ 的点, 并且可以通过这个点还原出原本的点.

>[!def] Segre嵌入
>定义一个映射
>$$\begin{aligned}\mathbb P^m_A\times_A\mathbb P^n_A\to&\mathbb P^{mn+m+n}_A\\([x_0,\ldots,x_m],[y_0,\ldots,y_n])\mapsto&[x_0y_0,x_0y_1,\ldots,x_iy_j,\ldots,x_my_n]\\=&[z_{00},z_{01},\ldots,z_{ij},\ldots,z_{mn}]\end{aligned}$$
>更具体地, 我们考虑仿射开集 $U_i\times V_j$ 其中 $U_i= D(x_i)$, $V_j=D(y_j)$ 到仿射开集 $W_{ij}=D(z_{ij})$ 的映射
>$$(x_0/x_i,\ldots,x_m/x_i,y_0/y_j,\ldots,y_n/y_j)\mapsto(x_0y_0/x_iy_j,\ldots,x_iy_j/x_iy_j,\ldots,x_my_n/x_iy_j)$$
>或者用环映射表示为 $z_{ab/ij}\mapsto x_a/x_i\cdot y_b/y_j$. 容易证明这给出了一个良定义的态射 $\mathbb P^m_A\times_A\mathbb P^n_A\to\mathbb P^{mn+m+n}_A$. 称为**Segre嵌入** (Segre embedding). 其像被称为**Segre簇** (Segre variety).

>[!thm] 定理1
>Segre簇是由下面的等式所刻画:
>$$\rank\begin{pmatrix}z_{00}&\cdots&z_{0n}\\ \vdots&\ddots&\vdots\\ z_{m0}&\cdots&z_{mn}\end{pmatrix}=1$$
>也就是说所有 $2\times 2$ 的子式都消失.





