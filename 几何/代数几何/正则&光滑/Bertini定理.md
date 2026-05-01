#代数几何 

Bertini的核心思想是, 如果你有一个[[光滑概形|光滑]]的几何体, 那么用一个一般的平面去切它, 切出来的截面也是光滑的, 并且维度 $-1$. 非常符合我们直觉的一个事实, 下面我们来陈述并证明之.

>[!thm] Bertini定理 (Bertini's Theorem)
>设 $X$ 是 $\mathbb P^n_k$ 的一个光滑子[[代数簇|簇]], 并且具有纯维数 $d$. 那么存在一个[[对偶射影空间]]的开子集 $U\subset\mathbb P^{n\lor}_k$, 使得对于每个 $p=[H]\in U$, $H$ 不包含 $X$ 的任何分支, 并且概形 $H\cap X$ 是在[[剩余域]] $\kappa(p)$ 上以纯维数 $d-1$ 光滑的.

>[!pf]
>这个证明的核心思想意外地朴素: 我们先描述出"坏的"超平面, 接着证明他们构成一个维数之至多为 $n-1$ 的闭子集, 位于 $\mathbb P^n_k$ 中, 其补集是一个稠密的开子集. 准确地说, 我们将定义一个射影簇 $Z\subset X\times \mathbb P^{n\lor}_k$, 非正式地描述为
>$$Z=\set{(p\in X,H\subset\mathbb P^n_k):p\in H;\, p\,\text{是}\,H\cap X\,\text{的奇异点, 或}\,X\subset H}$$
>我们将看到投影 $\pi:Z\to X$ 在闭点上的纤维是维数 $n-1-\dim X$ 的射影空间. 因此 $\dim X\le n-1$, 因此 $Z$ 在 $\mathbb P^{n\lor}_k$ 中的像是一个闭子集.
>
>我们首先借助 $\mathbb P^n\times\mathbb P^{n\lor}$ 上的方程来精确地定义 $Z$. 其中 $\mathbb P^n$ 上的坐标为 $x_0,\ldots,x_n$. $\mathbb P^{n\lor}$ 上的对偶坐标为 $a_0,\ldots,a_n$. 假设 $X$ 由 $f_1,\ldots,f_r$ 定义. 将这些方程作为 $Z$ 的第一批定义方程, 那么至此我们定义了子概形 $Z\times\mathbb P^{n\lor}_k$. 我们再加入对偶射影空间的关系方程
>$$a_0x_0+\cdots+a_nx_n=0$$
>至此我们定义的子概形是 $p\in X$ 和 $p\in H$ 的点对 $(p,H)$. 注意此时
>$$\begin{pmatrix}\dfrac{\p f_1}{\p x_0}(p)&\cdots&\dfrac{\p f_r}{\p x_0}(p)\\ \vdots&\ddots&\vdots \\ \dfrac{\p f_1}{\p x_n}(p)&\cdots&\dfrac{\p f_r}{\p x_n}(p)\end{pmatrix}$$
>由[[射影空间的Jacobi判别法]], $X$ 在所有点处的Jacobi余秩恰为 $d+1$. 我们追加列
>$$\begin{pmatrix}a_0\\\vdots\\a_n\end{pmatrix}$$
>之后的射影雅可比矩阵的余秩必然 $\ge d+1$, 因此等于 $d+1$. 这恰好是我们想要的概念.
>
>下面我们证明 $\dim Z\le n-1$. 对于 $X$ 中的每一个闭店 $p$, 不妨令 $W_p$ 为包含 $p$ 且使得 $H\cap X$ 在 $p$ 处奇异的超平面的轨迹. 我们想知道 $W_p$ 的维数, 假设 $\dim X=d$, 那么 $W_p$ 定义中对超平面的限制对应于 $d+1$ 这个线性条件. 这意味着 $W_p$ 是一个余维数为 $d+1$, 即维数为 $n-d-1$ 的射影空间. 因此 $\pi:Z\to X$ 在每个闭店上的纤维具有纯维数 $n-d-1$, 这意味着 $\dim Z\le n-1$.

>[!thm] Bertini定理, 超曲面形式
>设 $X$ 是 $\mathbb P^n_k$ 中 $d$-纯维光滑子簇, 假设 $e_1,\ldots,e_r$ 是正整数, 令参数空间
>$$\mc P=\mathbb P^{\binom{e_1+n}{n}-1}\times\cdots\times\mathbb P^{\binom{e_r+n}{n}-1}$$
>用于参数化度数分别为 $e_1,\ldots,e_r$ 的 $r$ 元超曲面组 $(H_1,\ldots,H_r)$. 那么, 在参数空间 $\mc P$ 中存在一个稠密的开子集 $U$, 使得对于 $U$ 中任意一点 $p=[(H_1,\ldots,H_r)]$, 交集 $H_1\cap\cdots\cap H_r$ 不包含 $X$ 的任何可约分支. 并且 $H_1\cap\cdots\cap H_r\cap X$ 在 $\kappa(p)$ 上光滑, 且具有纯维数 $d-r$.

