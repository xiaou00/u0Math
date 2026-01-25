#分析 

>[!def] 交换Banach代数
>设[[Banach代数]] $\mc L$, 若 $\mc L$ 的乘法满足交换律 $\mb{MN}=\mb{NM}$, 则称 $\mc L$ 是**交换Banach代数**(commutive Banach algebra).

>[!thm] 定理1
>有单位元的交换Banach代数到 $\C$ 的每个同态都是一个压缩, 即满足
>$$|p(\mb M)|\le\norm{\mb M}$$

>[!pf]
>由于对每个 $\mb M$, $\mb M=\mb I\mb M$, 且 $p$ 是同态, 从而
>$$p(\mb M)=p(\mb I\mb M)=p(\mb I)p(\mb M)$$
>从而知除了 $p\equiv0$ 的情形下 $p(\mb I)=1$. 令 $\mb K$ 是 $\mc L$ 的可逆元, 即 $\mb K\mb N=\mb I$, 从而
>$$p(\mb K)p(\mb N)=p(\mb{KN})=p(\mb I)=1$$
>这就证明了如下引理:
>>[!lem] 引理1
>>交换Banach代数中, 若 $\mb K$ 可逆, 则 $p(\mb K)\ne 0$.
>
>现在假设原条件不成立, 即存在 $\mb M$ 使得 $|p(\mb M)|>\norm{\mb M}$. 则
>$$\mb B=\frac{\mb M}{p(\mb M)}$$
>满足 $\norm{\mb B}<1$. 显然此时 $\mb K=\mb I-\mb B$ 是可逆的, 另一方面
>$$p(\mb K)=p(\mb I)-p\left(\frac{\mb M}{p(\mb M)}\right)=1-1=0$$
>这与引理结论矛盾, 从而原命题成立.

类似地, 我们可以定义一个Banach代数的理想为乘法吸收性的子空间. 

>[!thm] 定理2
>若 $\mc A$ 是有单位元的可除 $\C$-Banach代数, 那么 $\mc A$ 和复数域同构.

>[!pf]
>显然 $\mc A$ 中元素 $\mb K$ 的[[谱]]是使得 $\zeta\mb I-\mb K$ 不可逆的复数 $\zeta$ 所构成的集合, 这里 $\mb I$ 是 $\mc A$ 的单位. 显然 $\mb K$ 的谱都是非空的, 这意味着存在复数 $\kappa$ 使得 $\kappa\mb I-\mb K$ 是不可逆的. 由假设 $\mc A$ 是一个可除代数, 这只能当 $\kappa\mb I-\mb K$ 是 $\mc A$ 中零元时成立, 因此 $\kappa\mb I=\mb K$. 于是每个元素 $\mb K$ 是档位元的常数倍, 映射
>$$\mb K\to k$$
>是 $\mc A$ 到 $\C$ 的一个同构.

>[!cor] 推论1
>有单位元的交换Banach代数 $\mc L$ 中的元素 $\mb K$ 是可逆的, 当且仅当对 $\mc L$ 到 $\C$ 的所有非零同态 $p$, 均有 $p(\mb K)\ne 0$.

我们与一个非常重要的刻画交换Banach代数的谱的定理:

>[!thm] 定理3
>设 $\mc L$ 是一个有单位的交换Banach代数, 且 $\mb N$ 是 $\mc L$ 中任意元素, 则 $\mb N$ 的谱为
>$$\sigma(\mb N)=\set{p(\mb N)}$$
>这里 $p$ 取遍全体 $\mc L$ 到 $\C$ 的非零同态.

>[!pf]
>根据谱的定义, $\zeta$ 属于 $\sigma(\mb N)$ 当且仅当 $\zeta\mb  I-\mb N$ 是不可逆的. 由推论1可知这当且仅当存在 $p$ 使得 $p(\zeta\mb I-\mb N)=0$, 由于 $p(\mb I)=1$, 从而 $\zeta\in\sigma(\mb N)$ 当且仅当存在 $p$ 使得 $\zeta=p(\mb N)$.

