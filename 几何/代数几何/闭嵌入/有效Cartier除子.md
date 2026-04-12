#代数几何 

>[!def] 有效Cartier除子
>如果一个[[闭嵌入|闭子概形]]的[[理想层]]在每一点附近都局部地由一个非零因子的函数生成, 则称这个闭子概形是一个**有效Cartier除子** (effective Cartier divisor).
>
>---
>更严谨地, 若 $\pi:X\into Y$ 是一个闭嵌入, 并且存在 $Y$ 的一个仿射开覆盖 $\set{\Spec~A_i}$, 并且存在一族非零因子 $t_i\in A_i$ 使得 $V(t_i)=X|_{\Spec~A_i}$, 则称 $X$ 是 $Y$ 上的一个**有效Cartier除子**.
>
>当我们想表示限制在有效Cartier除子上时, 我们会使用术语"被有效Cartier除子切片".

注意, 如果 $D$ 是 $\Spec~A$ 的一个有效Cartier除子, 那么不一定存在一个 $t\in A$ 使得 $D=V(t)$. 换句话说, 他并不是仿射局部的条件.

>[!thm] 定理1
>设 $X$ 是一个[[Noether概形|局部Noether概形]], 若 $t\in\Gamma(X,\mc O_X)$ 是 $X$ 上的一个函数, 则 $V(t)$ 是一个有效Cartier除子当且仅当其不在任何[[相伴点]]上消失.

>[!pf]
>记 $Z(A)$ 为 $A$ 中所有零因子的集合, 这相当于证明
>$$Z(A)=\bigcup_{\mf p\in\Ass(A)}\mf p$$
>首先证明 $\cup_{\mf p\in\Ass(A)}\mf p\subset Z(A)$. 由相伴素理想的定义若 $\mf p\in\Ass(A)$, 存在 $m\in A$ 非零使得 $\mf p=\Ann(m)$, 从而由定义显然 $\mf p$ 的任何元素在此意义下都是零因子.
>
>反之, 证明 $\cup_{\mf p\in\Ass(A)}\mf p\supset Z(A)$. 由[[相伴点|此页面定理5]], 显然.

>[!thm] 定理2
>设 $V(t)=V(t')\into\Spec~A$ 是有效Cartier除子, 且 $t,t'$ 是 $A$ 的非零因子. 则 $t$ 等于一个可逆元乘以 $t'$.

