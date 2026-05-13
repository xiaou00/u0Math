#代数几何 

>[!thm] 几何Nakayama引理
>设 $X$ 是一个[[概形]], $\mc F$ 是一个[[有限型(凝聚层)|有限型]]的[[拟凝聚层]], $p\in X$ 是一个点, 那么在 $p$ 点的生成元就是在 $p$ 点附近的生成元. 即对于开邻域 $p\in U\subset X$, 且 $a_1,\ldots,a_n\in\mc F(U)$, 使得他们的像 $a_1|_p,\ldots,a_n|_p$ 生成了[[模的纤维]] $\mc F|_p$, 那么存在 $p$ 的仿射开邻域 $p\in\Spec~A\subset U$ 使得在以下意义下 $a_1|_{\Spec~A},\ldots,a_n|_{\Spec~A}$ 生成了 $\mc F|_{\Spec~A}$:
>1. $a_1|_{\Spec~A},\ldots,a_n|_{\Spec~A}$ 作为 $A$-模生成了 $\mc F(\Spec~A)$. (全局意义)
>2. 对任意 $q\in\Spec~A$, $a_1,\ldots,a_n$ 作为 $\mc O_{X,q}$-模生成了茎 $\mc F_q$, 因此对任意 $q\in\Spec~A$, 纤维 $a_1|_q,\ldots,a_n|_q$ 作为 $\kappa(q)$-线性空间生成纤维 $\mc F|_q$. (局部意义)
>
>特别地, 若 $\mc F|_p=0$, 存在一个 $p$ 的开邻域 $V$ 使得 $\mc F|_V=0$.

>[!pf]
>首先我们聚焦在 $p$ 的局部环 $\mc O_{X,p}$, 设其极大理想 $\mf m_p$, 剩余域 $\kappa(p)=\mc O_{X,p}/\mf m_p$. 纤维的定义是
>$$\mc F|_p=\mc F_p\otimes_{\mc O_{X,p}}\kappa(p)\simeq\mc F_p/\mf m_p\mc F_p$$
>由于 $a_1|_p,\ldots,a_n|_p$ 生成 $\mc F|_p$, 因为 $\mc F$ 是有限型的拟凝聚层, 所以其在 $p$ 点的茎 $\mc F_p$ 是一个有限生成的 $\mc O_{X,p}$-模. 由[[Nakayama引理]], 对于局部环上的有限生成模, 若一组元素在模去极大理想的商中是生成元, 那么他们在原模中也是生成元. 从而, $a_1,\ldots,a_n$ 在 $p$ 点的芽 $a_1|_p,\ldots,a_n|_p$ 作为 $\mc O_{X,p}$-模生成 $\mc F_p$.
>
>接下来我们将这个结论延拓到仿射开邻域上, 我们在 $U$ 中取 $p$ 的一个仿射开邻域 $\Spec~B$. 此时 $p$ 对应的是 $B$ 的某个素理想 $\mf p$, 因为 $\mc F$ 是有限型拟凝聚层, 其在 $B$ 上对应一个有限生成的 $B$-模 $M$. 对于给定的元素 $a_1,\ldots,a_n$, 我们可以构造一个同态
>$$\begin{aligned}\phi:B^{\oplus n}&\to M\\ (r_1,\ldots,r_n)&\mapsto r_1a_1+\cdots+r_na_n\end{aligned}$$
>我们要证明条件1. 即 $a_1,\ldots,a_n$ 生成 $M$, 等价于证明 $\phi$ 是满射. 令 $C=\coker\phi\simeq M/\im\phi$, 由于 $M$ 是有限生成的, $C$ 自然是有限生成的. 我们接下来做一件事: 寻找 $B$ 的局部化使得 $C=0$. 显然根据之前的结论, 在 $\mf p$ 局部化后 $a_1|_\mf p,\ldots,a_n|_\mf p$ 生成了 $M_\mf p$. 从而局部化后 $\phi_\mf p:B_\mf p^{\oplus n}\to M_\mf p$ 是满的, 由于局部化是正合函子, 从而 $C_\mf p=0$.
>
>接下来, 我们利用上面给出的信息构造一个开邻域, 因为 $C$ 有限生成, 不妨设 $c_1,\ldots, c_m$ 是其生成元, 由于 $C_\mf p=0$, 对于每个 $c_k$, 由局部化定义, 必然存在某个 $s_k\in B\setminus\mf p$ 使得在 $B$ 中 $s_kc_k=0$, 令 $f=s_1s_2\cdots s_m$, 因为 $\mf p$ 是素理想且每个 $s_k\notin\mf p$, 从而 $f\notin\mf p$, 从而 $\mf p$ 属于主开集 $D(f)=\Spec~B_f$. 此时对于 $C$ 的任意生成元 $c_k$ 必然有 $fc_k=0$, 因此 $fC=0$, 这说明对 $f$ 局部化后 $C_f=0$. 从而 $\phi_f:B_f^{\oplus n}\to M_f$ 是满射, 令 $A=B_f$ 就是所求的仿射开邻域.
>
>条件1得证, 因为 $\phi_f$ 是满射, 从而 $a_1,\ldots,a_n$ 的限制在 $\Spec~A$ 上作为 $A$-模生成 $\mc F(\Spec~A)=M_f$.
>条件2得证, 因为对于 $\Spec~A$ 的任意点 $q$ (素理想 $\mf q\subset A$), $\mc F_q$ 是 $M_f$ 的进一步局部化 $(M_f)_\mf q$, 既然已经生成全局的 $M_f$, 其分数自然生成 $(M_f)_\mf q$, 对 $\kappa(q)$ 作张量就生成纤维 $\mc F|_q$.

>[!cor] 推论1
>设 $\mc F$ 是概形 $X$ 上的一个[[有限表示层]], 且对于每个 $p\in X$, $\mc F_p$ 是一个自由的 $\mc O_{X,p}$-模, 则 $\mc F$ 在 $p$ 的某个开邻域内是局部自由的. 从而 $\mc F$ 是局部自由的当且仅当对所有 $p\in X$, $\mc F_p$ 都是自由的 $\mc O_{X,p}$-模.

>[!pf]
>首先我们寻找一组生成元, 由于 $\mc F_p$ 是秩 $n$ 的自由 $\mc O_{X,p}$-模, 因此不妨设 $\mc F_p\simeq\mc O_{X,p}^{\oplus n}$.
>
>我们显然可以选取其一组基 $e_1,\ldots,e_n\in\mc F_p$, 由其定义, 我们总能找到 $p$ 的一个开邻域 $U$, 以及 $U$ 上的截面 $s_1,\ldots,s_n\in\mc F(U)$ 使得他们在 $p$ 的芽恰好是 $e_1,\ldots, e_n$. 这些截面自然地定义了一个 $\mc O_U$-模同态
>$$\phi:\mc O_U^{\oplus n }\to\mc F|_U$$
>在 $p$ 点诱导的茎映射 $\phi_p:\mc O_{X,p}^{\oplus n}\to\mc F_p$ 是一个同构, 因为他把标准基映射到了 $\mc F_p$ 的基 $e_1,\ldots,e_n$ 上. 从而 $\phi$ 显然是个满射.
>
>由于 $\mc F$ 是有限表示的, 其必然是有限型的, 由几何Nakayama引理, 如果在 $p$ 点茎上的映射是满射, 即生成 $\mc F_p$, 必然存在一个 $p$ 上更小的开邻域 $Y\subset U$ 使得这些截面生产 $Y$ 中每一点的茎. 也就是说限制在 $Y$ 上 $\phi$ 变为满射, 从而有正合列
>$$0\to\mc K\to \mc O_Y^{\oplus n}\xto{\phi|_Y}\mc F|_Y\to 0$$
>其中 $\mc K=\ker\phi|_Y$. 由[[有限表示层|此页面定理1]], $\mc K$ 也必然是有限型的, 现在考虑茎 $\mc K_p$, 因为在 $p$ 点, $\phi_p$ 是同构, 从而它的核在 $p$ 处为零, 即 $\mc K_p=0$. 由于 $\mc K$ 是有限型的, 它的支撑 $\Supp~\mc K=\set{q\in Y\mid \mc K_q\ne 0}$ 是 $Y$ 的一个闭集. 设这个闭集为 $Z$, 这意味着 $V=Y\setminus Z$ 是一个开邻域. 在这个开邻域上, 对任意 $q\in V$ 都有 $\mc K_q=0$, 即 $\mc K|_V=0$, 将正合列限制到 $V$ 上就有
>$$0\to\mc O^{\oplus n}_V\xto{\phi|_V}\mc F|_V\to 0$$
>说明 $\phi|_V$ 是同构, 从而 $\mc F|_V\simeq\mc O_V^{\oplus n}$.
