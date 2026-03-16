#代数几何 

>[!def] Veronese子环
>设 $S_\bullet$ 是有限生成的[[分次环]], 定义 $S_\bullet$ 的第 $n$ 个**Veronese子环** (Veronese subring) 为
>$$S_{n\bullet}=\bigoplus_{j=0}^\infty{S_{nj}}$$
>即将原次数 $n$ 压缩成新次数 $1$.

我们有一个非常重要的结论:

>[!thm] 定理1
>分次环的典范嵌入 $S_{n\bullet}\hookrightarrow S_\bullet$ 诱导了一个同构 $\Proj~S_\bullet\xto\sim\Proj~S_{n\bullet}$.

>[!pf]
>首先, 在素理想的层面上可以定义映射
>$$\psi:\Proj~S_\bullet\to\Proj~S_{n\bullet},\quad\mf p\mapsto\mf p\cap S_{n\bullet}$$
>由于 $i$ 保持分次结构, 齐次素理想的交集依然是齐次的. 并且不在无关理想内. 下面利用仿射局部覆盖 $D_+(f)$, 对任意 $f\in S_d$, 其中 $d>0$, 那么 $f^n\in S_{nd}$, 注意到 $f^n$ 是 $S_{n\bullet}$ 中的齐次元素, 我们考虑对应的局部仿射块:
>- $\Proj~S_\bullet$ 中, 有开集 $U_f=D_+(f)$, 其坐标环是分次局部化环的第 $0$ 部分, $(S_{(f)})_0$.
>- $\Proj~S_{n\bullet}$ 中, 有开集 $V_{f^n}=D_+(f^n)$, 其坐标环是 $((S_{n\bullet})_{(f^n)})_0$.
>
>代数证明可以验证这两个环是同构的, 并且在覆盖层面上相容的.


