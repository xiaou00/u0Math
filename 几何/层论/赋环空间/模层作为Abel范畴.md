#代数 

本页面中我们将讨论[[模层]]作为[[Abel范畴]]的一些性质. 

设 $\mc F,\mc G$ 是两个 $\mc O_X$-模层, 考虑 $\Hom_{\mc O_X}(\mc F,\mc G)$ 是全体 $\mc F$ 到 $\mc G$ 的模层态射, 它构成一个[[Abel群]], 设 $f,g\in\Hom_{\mc O_X}(\mc F,\mc G)$, 自然可以定义
$$(f+g)_U(s)=f_U(s)+g_U(s)$$
以及零态射 $0_U(s)=0$. 从而 $\mathsf{Mod}_{\mc O_X}$ 是一个 $\mathsf{Ab}$-范畴, 并且它有零对象, 也即是**零层** $\mathbb 0$, 定义为对任意开集 $U$, $\mathbb 0(U)=0$ 为平凡模. 并且对于任意两个层 $\mc F$ 和 $\mc G$, 可以定义直和层 $\mc F\oplus\mc G$ 为
$$U\mapsto\mc F(U)\oplus\mc G(U)$$
从而 $\mathsf{Mod}_{\mc O_X}$ 是一个[[加性范畴]].

>[!def] $\mc O_X$ 模层的核与余核
>对于 $\mc O_X$-模层 $\mc F,\mc G$ 以及模层态射 $\varphi:\mc F\to\mc G$, 定义**核层**(kernel sheaf)为
>$$\ker\varphi:U\mapsto\ker(\varphi_U)$$
>容易验证核预层是一个层, **核**(kernel)定义为 $\ker\varphi$ 和 $\varphi$ 的自然包含态射 $\ker\varphi\to\mc F$. 定义**余核层**(cokernel sheaf)为
>$$\coker\varphi:U\mapsto\coker(\varphi_U)=\mc{shf\,}(\mc G(U)/\im(\varphi_U))$$
>容易验证余核预层是一个层, **余核**(cokernel)定义为 $\coker\varphi$ 和 $\mc G$ 的自然包含态射 $\mc G\to\coker\varphi$.

>[!thm] 定理1 (Abel范畴性)
>$\mathsf{Mod}_{\mc O_X}$ 是一个Abel范畴.

>[!pf]
>由[[层态射|此页面定理2]]可知, $\varphi:\mc F\to\mc G$ 是单射 (满射) 当且仅当对任意 $p\in X$, $\varphi_p:\mc F_p\to\mc G_p$ 是单射 (满射). 由于 $\mc O_{X,p}$-模的范畴是Abel范畴, $\ker\varphi_p$ 和 $\coker\varphi_p$ 都存在. 由核和余核的定义, $\ker\varphi_p$ 和 $\coker\varphi_p$ 分别同构于 $\ker\varphi_p$ 和 $\coker\varphi_p$. 从而 $\mathsf{Mod}_{\mc O_X}$ 中的核和余核都存在, 因此是Abel范畴.

显然作为推论, 层的序列的正合性可以在茎的层面验证. 也即下述定理:

>[!thm] 定理2
>设 $\mc F$ 是 $\mc O_X$-模层, $p\in X$ 是一点, 则下列函子$$\begin{aligned}
\mathsf{Mod}_{\mc O_X}&\longrightarrow{\mc O_{X,p}}\mathsf{Mod}\\
\mc F&\longmapsto\mc F_p
\end{aligned}$$
>是[[正合函子]].

>[!pf]
>定理的证明是显然的, 因为Abel范畴中滤过归纳极限是正合的, 而茎本质也是滤过归纳极限.

