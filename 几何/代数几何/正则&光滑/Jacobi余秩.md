#代数几何

(来自Ravi Vakil, The Rising Sea, 13.1.7.)

设 $X$ 是有限型的 $k$-[[概形]]. 那么局部地, $X$ 具有形式
$$\operatorname{Spec}k[x_1,\ldots,x_n]/(f_1,\ldots,f_r)$$
设 $p:\operatorname{Spec}k\to X$ 是 $X$ 上的一个 $k$-点, 那么在点 $p$ 处有[[Zariski切空间|Zariski余切空间]] $T_p^\lor X:=\mathfrak{m}/\mathfrak{m}^2$, 其中 $\mathfrak{m}$ 是 $p$ 处的极大理想.

还是概形 $X$ 和 $k$-点 $p$, 我们可以定义形式偏导数
$$\frac{\partial}{\partial x_i}(ax_i^n)=nax_i^{n-1}$$
那么我们就可以定义Jacobi矩阵
$$J_p=\begin{pmatrix}
\dfrac{\partial f_1}{\partial x_1}(p) & \cdots & \dfrac{\partial f_r}{\partial x_1}(p)\\
\vdots & \ddots & \vdots\\
\dfrac{\partial f_1}{\partial x_n}(p) & \cdots & \dfrac{\partial f_r}{\partial x_n}(p)
\end{pmatrix}$$
他对应于一个线性映射 $k^n\to k^r$. 我们有定理

>[!lem] 引理
>设 $A=B/I$, 那么 $A^2\simeq (B^2+I)/I$. 这里 $A^2$ 和 $B^2$ 分别是 $A$ 和 $B$ 的平方理想.

>[!pf]
>在 $B/I$ 中, 两个元素相乘的结果是 $(x+I)(y+I)=xy+I$. 由于 $A$ 中元素皆形如 $x+I$, 其中 $x\in B$. 从而 $A^2$ 中的元素皆形如 $xy+I$, 其中 $x\in B,y\in B$, 显然 $xy\in B^2$. 因此 $\mathfrak{m}^2$ 等价于包含 $\mathfrak{n}^2$ 和 $I$ 的最小理想模去 $I$, 这是因为 $B^2+I$ 中的元素皆形如 $x+y$, 其中 $x\in B^2,y\in I$. 从而 $A^2$ 中的元素皆形如 $x+I$, 其中 $x\in B^2+I$. 因此 $A^2\simeq (B^2+I)/I$.

>[!thm] 定理
>上述线性映射的余核就是余切空间 $T_p^\lor X$. 即 $\operatorname{coker} J_p\simeq\mathfrak{m}/\mathfrak{m}^2$.

>[!pf]
>为了简化记号, 首先我们可以假设 $p$ 是仿射空间 $\mathbb{A}^n_k$ 的原点. 因为若 $p$ 不是原点, 例如 $p=(a_1,\ldots,a_n)$, 那么我们可以作一个线性变换 $y_i=x_i-a_i$. 容易证明有多项式环同构
>$$k[x_1,\ldots,x_n]\simeq k[y_1,\ldots,y_n]$$
>以及偏导数在平移下不变
>$$\frac{\partial}{\partial x_i}(p)=\frac{\partial}{\partial y_i}(0)$$
>从而不失一般性, 直接假设是合理的.
>
>接下来我们来建立一些记号和代数关系:
>- 外围的多项式 $R=k[x_1,\ldots,x_n]$;
>- 定义 $I=(f_1,\ldots,f_r)$, 那么 $X$ 的局部结构由商环 $R/I$ 给出;
>- 原点 $p=(0,\ldots,0)$ 的极大理想 $\mathfrak{n}=(x_1,\ldots,x_n)$;
>- $X$ 的坐标环 $A=R/I$.
>
>而点 $p$ 落在 $X$ 上, 这等价于是说对任何 $i$ 都有 $f_i(p)=0$. 这里我们假设了 $p$ 是原点, 从而迫使 $f_i$ 的常数项为零. 因此 $I\subset\mathfrak{n}$. 而 $p$ 在 $A$ 中所对应的极大理想很显然就是 $\mathfrak{m}=\mathfrak{n}/I$. Zariski余切空间 $T_p^\lor X$ 就是 $\mathfrak{m}/\mathfrak{m}^2$.
>
>我们接下来的任务就是计算 $\mathfrak{m}/\mathfrak{m}^2$. 首先由引理1, 我们有
>$$\mathfrak{m}/\mathfrak{m}^2=(\mathfrak{n}/I)/((\mathfrak{n}^2+I)/I)\tag{I}$$
>再由[[第三同构定理]], 我们有
>$$\mathfrak{m}/\mathfrak{m}^2\simeq \mathfrak{n}/(\mathfrak{n}^2+I)$$
>我们已经知道 $\mathfrak{n}/\mathfrak{n}^2$ 是 $x_1,\ldots,x_n$ 生成的 $k$-线性空间, 可以将其等同于 $k^n$. 这个空间中, 商空间 $\mathfrak{n}/(\mathfrak{n}^2+I)$ 就是 $\mathfrak{n}/\mathfrak{n}^2$ 中模去 $I$ 中元素生成的子空间.
>
>于是我们来检查 $I$ 中元素在 $\mathfrak{n}/\mathfrak{n}^2$ 中的理想到底如何, 对任意多项式 $f\in I$, 由于 $f_j(0)=0$, 我们可以作Taylor展开
>$$f=\sum_{i=1}^n\frac{\partial f}{\partial x_i}(0)x_i+\text{高阶项}$$
>当我们将 $f_j$ 映射到 $\mathfrak{n}/\mathfrak{n}^2$ 中时, 由于高阶项都落在 $\mathfrak{n}^2$ 中变成了零, 因此 $f_j$ 在 $\mathfrak{n}/\mathfrak{n}^2$ 中的像就是其线性部分
>$$\sum_{i=1}^n\frac{\partial f_j}{\partial x_i}(0)x_i$$
>恰好, 这个线性组合可以看作 $k^n$ 中基底 $x_1,\ldots,x_n$ 的一个列向量
>$$\begin{pmatrix}\dfrac{\partial f_j}{\partial x_1}(0)\\\vdots\\\dfrac{\partial f_j}{\partial x_n}(0)\end{pmatrix}$$
>恰好就是Jacobi矩阵 $J_p$ 的第 $j$ 列. 因为理想 $I$ 是由 $f_1,\ldots,f_r$ 生成的, 从而 $I$ 中元素在 $\mathfrak{n}/\mathfrak{n}^2$ 中的像就是 $J_p$ 的列向量所张成的子空间. 从而 $\mathfrak{m}/\mathfrak{m}^2$ 就是 $k^n$ 模去 $J_p$ 的列向量所张成的子空间 $(\mathfrak{n}^2+I)/\mathfrak{n}^2$, 回顾 (I), 有
>$$\mathfrak{m}/\mathfrak{m}^2\simeq \frac{\mathfrak{n}/\mathfrak{n}^2}{(\mathfrak{n}^2+I)/\mathfrak{n}^2}\simeq k^n/\operatorname{im} J_p=\operatorname{coker}J_p$$

注意, 在更多语境下, Jacobi矩阵一般是上述矩阵的转置 (但这里是余切空间, 因此是列向量).

>[!thm] 定理1 (余秩与生成元无关 I)
>假设 $A$ 是一个有限生成的 $k$-代数, 由 $x_1,\ldots,x_n$ 生成, 理想由 $f_1,\ldots,f_r$ 生成. $p$ 为 $\operatorname{Spec} A$ 中的一点. 那么对于任意 $g\in I$, 将梯度向量
>$$\nabla g(p)=\begin{pmatrix}\dfrac{\partial g}{\partial x_1}(p)\\ \vdots\\ \dfrac{\partial g}{\partial x_n}(p)\end{pmatrix}$$
>附加到Jacobi矩阵中得到的新矩阵, 其秩与原Jacobi矩阵的秩相同. 换言之, 矩阵在 $p$ 的余秩不依赖生成元 $f_1,\ldots,f_r$ 的选取.

>[!pf]
>由于 $g\in I=(f_1,\ldots,f_r)$, 可以写 $g=\sum_{i=1}^r a_if_i$. 对各变量求偏导数, 由乘积法则得
>$$\frac{\partial g}{\partial x_j}=\sum_{i=1}^r\left(\frac{\partial a_i}{\partial x_j}f_i+a_i\frac{\partial f_i}{\partial x_j}\right)\tag{II}$$
>由于 $p\in\operatorname{Spec} A$, 对所有 $i$ 有 $f_i(p)=0$, 代入 (II) 得
>$$\frac{\partial g}{\partial x_j}(p)=\sum_{i=1}^r a_i(p)\frac{\partial f_i}{\partial x_j}(p)$$
>推广到所有变量, 即 $\nabla g(p)=\sum_{i=1}^r a_i(p)\nabla f_i(p)$, 从而新加入的列向量是原Jacobi矩阵列向量的线性组合, 秩不变.

>[!thm] 定理2 (余秩与生成元无关 II)
>假设 $A$ 是一个有限生成的 $k$-代数, 由 $x_1,\ldots,x_n$ 生成, 理想由 $f_1,\ldots,f_r$ 生成. $p$ 为 $\operatorname{Spec} A$ 中的一点. 假设 $q(x_1,\ldots,x_n)\in k[x_1,\ldots,x_n]$, 设 $h=y-q(x_1,\ldots,x_n)\in k[x_1,\ldots,x_n,y]$. 那么 $(f_1,\ldots,f_r,h)$ 关于变量 $x_1,\ldots,x_n,y$ 在 $p$ 处的Jacobi矩阵的秩和 $(f_1,\ldots,f_r)$ 关于变量 $x_1,\ldots,x_n$ 在 $p$ 处的Jacobi矩阵的秩相同.

>[!pf]
>扩充后的矩阵为
>$$J'=\begin{pmatrix}
>\dfrac{\partial f_1}{\partial x_1} & \dots & \dfrac{\partial f_r}{\partial x_1} & \dfrac{\partial h}{\partial x_1} \\
>\vdots & \ddots & \vdots & \vdots \\
>\dfrac{\partial f_1}{\partial x_n} & \dots & \dfrac{\partial f_r}{\partial x_n} & \dfrac{\partial h}{\partial x_n} \\
>\dfrac{\partial f_1}{\partial y} & \dots & \dfrac{\partial f_r}{\partial y} & \dfrac{\partial h}{\partial y}
>\end{pmatrix}$$
>注意到 $f_i$ 不含 $y$ 故 $\dfrac{\partial f_i}{\partial y}=0$; $h=y-q$ 故 $\dfrac{\partial h}{\partial y}=1$, $\dfrac{\partial h}{\partial x_j}=-\dfrac{\partial q}{\partial x_j}$. 代入得
>$$J'(p)=\begin{pmatrix}
>\dfrac{\partial f_1}{\partial x_1}(p) & \dots & \dfrac{\partial f_r}{\partial x_1}(p) & -\dfrac{\partial q}{\partial x_1}(p) \\
>\vdots & \ddots & \vdots & \vdots \\
>\dfrac{\partial f_1}{\partial x_n}(p) & \dots & \dfrac{\partial f_r}{\partial x_n}(p) & -\dfrac{\partial q}{\partial x_n}(p) \\
>0 & \dots & 0 & 1
>\end{pmatrix}$$
>由初等变换知 $\operatorname{rank}J'(p)=\operatorname{rank}J(p)+1$. 余秩分别为 $n-\operatorname{rank}J(p)$ 和 $n+1-\operatorname{rank}J'(p)$, 两者相同.

>[!def] Jacobi余秩函数
>每个有限型的 $k$-概形 $X$ 都自带一个函数 $\mathrm{cork}:X\to\mathbb{Z}^{\ge 0}$, 称为**Jacobi余秩函数** (Jacobian corank function). 其在 $k$-点 $p$ 处的取值为 $\dim_kT_p^\lor X$. 他是[[凝聚层|凝聚]]微分层 $\Omega_{X/k}$ 的秩.

我们来回顾一下上半连续函数的定义. 设 $X$ 是一个集合, $f:X\to\mathbb{Z}^{\ge 0}$ 是一个函数, 如果对于任意 $n\in\mathbb{Z}^{\ge 0}$, 集合 $\{x\in X:f(x)\ge n\}$ 都是闭集, 那么称 $f$ 是一个**上半连续函数**. 上半连续函数的一个重要性质是, 其最大值总是可以达到. Jacobi余秩也满足这个性质:

>[!thm] 定理3 (上半连续性)
>设 $X$ 是一个有限型的 $k$-概形, 那么Jacobi余秩函数 $\mathrm{cork}:X\to\mathbb{Z}^{\ge 0}$ 是一个上半连续函数. 因此 $\mathrm{cork}$ 的最大值总是可以达到的.

>[!pf]
>上半连续性是局部的性质, 可设 $X$ 仿射, 由 $x_1,\ldots,x_n$ 生成, 理想由 $f_1,\ldots,f_r$ 生成. 对任意 $n\in\mathbb{Z}^{\ge 0}$, 集合 $\{p\in X:\mathrm{cork}(p)\ge n\}=\{p\in X:\operatorname{rank}J_p\le n\}$, 这是一个闭集.

>[!thm] 定理4 (域扩张下不变)
>设 $X$ 是有限型的 $k$-概形, $\ell/k$ 是域扩张, 在基变换
>$$X\times_k\ell\to X,\quad p\mapsto q$$
>下, 总有 $\mathrm{cork}(p)=\mathrm{cork}(q)$.

>[!pf]
>下放到仿射情形, 基变换后坐标环为
>$$A_\ell=A\otimes_k\ell\simeq\ell[x_1,\ldots,x_n]/(f_1,\ldots,f_r)$$
>其中 $f_i$ 的系数在 $k$ 中. 设 $q\in X$ 对应素理想 $\mathfrak{q}$, 剩余域 $\kappa(q)$; $p\in X_\ell$ 对应素理想 $\mathfrak{p}$, 剩余域 $\kappa(p)$. 有自然域扩张 $\kappa(q)\hookrightarrow\kappa(p)$. 由于 $f_i$ 的系数在 $k$ 中, 偏导数 $\dfrac{\partial f_i}{\partial x_j}$ 的系数也在 $k$ 中, 故 $J_p$ 的每个条目都是 $J_q$ 对应条目在 $\kappa(q)\hookrightarrow\kappa(p)$ 下的像. 因此 $\operatorname{rank}J_p=\operatorname{rank}J_q$, 从而 $\mathrm{cork}(p)=\mathrm{cork}(q)$.

