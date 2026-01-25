#分析 

>[!lem] 引理1
>设 $\mc L$ 是由单位元的[[交换Banach代数]], 则对 $\mc L$ 中的每个[[极大理想]] $\mc M$, 都存在 $\mc L\to\C$ 的代数同态 $p_\mc M$ 使得 $\mc M$ 为其零空间.
>$$p_\mc M(\mb K)=0\iff \mb K\in\mc M$$
>相反地, 从 $\mc L$ 到 $\C$ 的每个非零同态的零空间是一个极大理想.

>[!def] Gelfand表示
>考虑[[交换Banach代数]] $\mc L$ 的[[极大理想]]空间 $\mc J$ 为其全体极大理想的集合. 对于极大理想 $\mc M$ 和 $\mc L$ 中元素 $\mb N$, 我们所构造的同态
>$$p_\mc M:\mc L\to\mc L/\mc M\to\C$$
>它可以视作 $p=p_\mc M(\mb N)=p(\mc M,\mb N)$. 若固定 $\mb N$, 则 $p$ 是极大理想空间 $\mc J$ 上的函数.

显然下列结论成立:

>[!thm] 定理1
>Gelfand表示是由 $\mc L$ 到集合 $\mc J$ 上复值函数构成的代数同态.

>[!thm] 定理2
>Gelfand表示是一个收缩 $|p(\mc M,\mb N)|\le\norm{\mb  N}$.

>[!thm] 定理3
>$\mb N$ 的谱是表示 $\mb N$ 的函数 $p(-,\mb N)$ 的值域.

>[!thm] 定理4
>单位元 $\mb I$ 被 $p(\mc M,\mb I)=1$ 表示.

>[!thm] 定理5
>函数 $p$ 分离 $\mc J$ 中的点, 即对于两个不同的极大理想 $\mc M$ 和 $\mc M'$, 存在 $\mb N$ 使得 $p(\mc M,\mb N)\ne p(\mc M',\mb N)$.

