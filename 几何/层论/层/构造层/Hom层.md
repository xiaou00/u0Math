#代数 

>[!def] Hom层
>设 $\mc F,\mc G$ 是 $X$ 上的两个集合[[层]], 定义
>$$\mc{Hom}(\mc F,\mc G)(U)=\Hom(\mc F|_U,\mc G|_U)$$
>其中右边是[[限制层]]的[[层态射]]集. 称之为 $\mc F$ 到 $\mc G$ 的**Hom层** (Hom-sheaf).

需要注意的是后面的正体 $\Hom$ 表示的是层同态, 前者的花体 $\mc{Hom}$ 强调这是层. 我们来验证 $\mc{Hom}(\mc F,\mc G)$ 是 $X$ 上的一个层. 首先对于包含关系 $V\hookrightarrow U$, 定义限制映射
$$\begin{aligned}
\mathrm{res}_{U,V}:\mc{Hom}(\mc F,\mc G)(U)&\to\mc{Hom}(\mc F,\mc G)(V)\\
(\phi:\mc F|_U\to\mc G|_V)&\mapsto(\phi|_V:\mc F|_V\to\mc G|_V)
\end{aligned}$$
其中 $\phi|_V$ 是 $\phi$ 的限制, 即对于 $W\subset V$ 的开子集, $\phi|_V(W)=\phi(W)$. 显然 $\mc{Hom}(\mc F,\mc G)$ 是 $X$ 上的一个预层. 容易验证他满足层公理.

若 $\mc F,\mc G$ 是 $\mc O_X$-模层, 那么我们可以进一步定义 $\mc{Hom}$ 的行为.

>[!def] Hom层
>设 $\mc F,\mc G$ 是 $X$ 上的两个$\mc O_X$-[[赋环空间|模层]], 定义
>$$\mc{Hom}(\mc F,\mc G)(U)=\Hom_{\mc O_X}(\mc F|_U,\mc G|_U)$$
>其中右边是限制层的模层同态集 (满足 $\mc O_X$-线性的). 称之为 $\mc F$ 到 $\mc G$ 的**Hom层** (Hom-sheaf).

对任意开集 $U\subset X$, $\mc{Hom}(\mc F,\mc G)(U)$ 的元素是 $\mc O_U$-线性映射 $\phi:\mc F|_U\to\mc G|_U$.

对于 $\Hom_{\mc O_X}(\mc F|_U,\mc G|_U)$, 我们定义加法和数乘如下, 对于 $\phi,\psi\in\Hom_{\mc O_X}(\mc F|_U,\mc G|_U)$ 和 $a\in\mc O_X(U)$, $V\subset U$ 和 $s\in\mc F|_U(V)$, 定义
$$\begin{aligned}
(\phi+\psi)_V(s)&=\phi_V(s)+\psi_V(s)\\
(a\cdot\phi)_V(s)&=a(s)\cdot\phi_V(s)
\end{aligned}$$
需要注意的是, $\mc{Hom}$ 并不能和茎交换, 即 $\mc{Hom}(\mc F,\mc G)_p$ 并不总是同构于 $\Hom(\mc F_p,\mc G_p)$.

>[!def] 对偶层
>设 $\mc O_X$-模层 $\mc F$, 其**对偶层**(dual sheaf)定义为层
>$$\mc F^\lor=\mc{Hom}(\mc F,\mc O_X)$$

