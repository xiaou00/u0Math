#代数几何 

我们不妨考虑[[函子|反变函子]]
$$F:\mathsf{Sch}^\mathrm{op}\to\mathsf{Set}$$
这个函子将每个概形 $Y$ 打到一个集合 $F(Y)$. 在[[概形的纤维积]]的讨论中, 我们意识到了可表函子的态射是可以胶合的, 可以给出[[可表函子]]的一个必要条件.

>[!def] Zariski层
>设 $F:\mathsf{Sch}^\mathrm{op}\to\mathsf{Set}$, 若对于任何概形 $Y$ 和其仿射开覆盖 $\set{U_i\to Y}$, 下序列必然是[[等值子]]序列:
>$$F(Y)\xto{\mathrm{res}}\prod_{i}F(U_i)\underset{p_2}{\overset{p_1}{\rightrightarrows}}\prod_{i,j}F(U_i\times_YU_j)$$
>则称 $F$ 为一个**Zariski层** (Zariski sheaf).

显然, $\mathsf{Sch}^\mathrm{op}\to\mathsf{Set}$ 的 一个函子可表的必要条件是他是一个Zariski层.


