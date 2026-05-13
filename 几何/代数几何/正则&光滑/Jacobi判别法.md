
>[!thm] Jacobi判别法
>一个有限型的 $k$-[[概形 ]]$X=\operatorname{Spec}k[x_1,\ldots,x_n]/(f_1,\ldots,f_r)$ 若具有纯维数 $d$, 则一个 $k$-点 $p$ 是 $X$ 的[[正则概形|正则点]], 当且仅当[[Jacobi余秩]] $\mathrm{cork}(p)=d$.

>[!pf]
>不妨假设 $p$ 是原点, 对应极大理想 $\mathfrak{m}=(x_1,\ldots,x_n)$. 对 $I$ 的生成元 $f_i$ 作原点处的Taylor展开
>$$f_i=\sum_{j=1}^n\frac{\partial f_i}{\partial x_j}(p)x_j+\text{高阶项}$$
>由于 $f_i(p)=0$, 且高次项消灭, 因此 $f_i$ 在 $\mathfrak{m}/\mathfrak{m}^2$ 中的像就是其线性部分
>$$\overline{f}_i=\sum_{j=1}^n\frac{\partial f_i}{\partial x_j}(p)\overline{x}_j$$
>其中 $\{\overline{x}_1,\ldots,\overline{x}_n\}$ 是 $\mathfrak{m}/\mathfrak{m}^2$ 的基底. 注意到 $\overline{f}_i$ 在此基底中的坐标就是Jacobi矩阵
>$$J_p=\begin{pmatrix}\dfrac{\partial f_1}{\partial x_1}(p) & \cdots & \dfrac{\partial f_1}{\partial x_n}(p)\\
>\vdots & \ddots & \vdots\\
>\dfrac{\partial f_r}{\partial x_1}(p) & \cdots & \dfrac{\partial f_r}{\partial x_n}(p)\end{pmatrix}$$
>的第 $i$ 行. 线性空间 $(I+\mathfrak{m}^2)/\mathfrak{m}^2$ 由 $\overline{f}_1,\ldots,\overline{f}_r$ 张成, 其维数
>$$\dim_k\frac{I+\mathfrak{m}^2}{\mathfrak{m}^2}=\operatorname{rk}J_p$$
>回到概形 $X$, 其在点 $p$ 的局部环 $\mathcal{O}_{X,p}$ 的极大理想为 $\overline{\mathfrak{m}}=\mathfrak{m}/I$, 余切空间为 $\overline{\mathfrak{m}}/\overline{\mathfrak{m}}^2$. 从而
>$$\overline{\mathfrak{m}}/\overline{\mathfrak{m}}^2\simeq\frac{\mathfrak{m}/I}{(\mathfrak{m}^2+I)/I}\simeq\frac{\mathfrak{m}}{\mathfrak{m}^2+I}$$
>利用短正合列
>$$0\to\frac{I+\mathfrak{m}^2}{\mathfrak{m}^2}\to\mathfrak{m}/\mathfrak{m}^2\to\frac{\mathfrak{m}}{\mathfrak{m}^2+I}\to 0$$
>得到维数公式
>$$\dim_k\overline{\mathfrak{m}}/\overline{\mathfrak{m}}^2=\dim_k\mathfrak{m}/\mathfrak{m}^2-\dim_k\frac{I+\mathfrak{m}^2}{\mathfrak{m}^2}=n-\operatorname{rk}J_p$$
>因此 $\mathrm{cork}(p)=\dim_k\overline{\mathfrak{m}}/\overline{\mathfrak{m}}^2$.

>[!cor] 推论
>设 $k=\overline{k}$, 那么 $\mathbb{A}^n_k$ 中的仿射超曲面 $X=V(f)$ 的正则闭点 $p$ 就是满足 $\nabla f(p)\ne 0$ 的点.
