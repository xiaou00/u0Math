#代数几何 

我们接下来要定义一个[[概形]] $\Proj\,S_\bullet$, 其中 $S_\bullet$ 是 $\N$-[[分次环]]. 我们的构造会使得:
- 若 $S_\bullet$ 是 $A[x_0,\ldots,x_n]$, 那么结构是[[射影空间]] $\mathbb P^n_A$.
- 若 $S_\bullet$ 是 $A[x_0,\ldots,x_n]/(f(x_0,\ldots,x_n))$ 其中 $f$ 是齐次多项式, 那么结构是 $\mathbb P^n_A$ 中 $f=0$ 所刻画的对象.
就像我们对[[Spec函子]]做的那样, 我们先考虑 $\mathsf{Set}$, 再考虑 $\mathsf{Top}$, 最后作为赋环空间和 $\mathsf{Sch}$ 讨论.

在对 $\mathbb P^n_A$ 的初步定义中, 我们胶合了 $n+1$ 个选定的仿射块, 但我们不希望进行任何人为的选择. 因此, 我们通过同时考虑"所有可能的"仿射开集来实现这一点.

我们的仿射块如下: 对于每个齐次元 $f\in S_+$ ($S_+$ 是无关理想, 即次数大于 $0$ 的齐次元生成的理想), 局部化 $(S_\bullet)_f$ 自然是 $\Z$-分次环, 其中 $\deg(1/f)=-\deg f$. 不妨考虑
$$\Spec\,((S_\bullet)_f)_0$$
其中 $((S_\bullet)_f)_0$ 是 $(S_\bullet)_f$ 的基础环, 随着 $f$ 取遍 $S_+$, 这些就是我们所需的仿射构建块. 记号 $((S_\bullet)_f)_0$ 确实很尴尬, 从而不妨考虑将此应用于
$$S_\bullet=k[x_0,\ldots,x_n]$$
且 $f=x_i$ 时, 得到环
$$k[x_{0/i},x_{1/i},\ldots,x_{n/i}]/(x_{i/i}-1)$$
定义 $\Proj$ 的另一种方法就是通过胶合这类仿射概形, 但是这么做太不优雅了.

>[!def] $\Proj$ 作为集合
>设 $S_\bullet$ 是分次环, 则 $\Proj\, S_\bullet$ 的点是 $S$ 中全体不包含无关理想 $S_+$ 的齐次素理想. 即
>$$\set{\mathfrak p\in\Spec(S_\bullet)\mid \mathfrak p\,\text{齐次},\,\mathfrak p\not\supset S_+}$$

经典射影几何中, $\mathbb P^n$ 的一个点上 $\mathbb A^{n+1}$ 中一条过原点的直线. 想象在仿射概形 $\Spec(S_\bullet)$ 里, 齐次理想其实就对应一个锥. 这里有一个重要的直觉: 

锥的定义是, 若 $P$ 在这个集合中, 那么连接原点和 $P$ 的直线除了原点也在直线中. 而对于齐次多项式, 总满足
$$f(\lambda x_0,\ldots,\lambda x_n)=\lambda^d\cdot f(x_0\ldots, x_n)$$
而这恰好是我们所感兴趣的锥的特征. 因此齐次理想 $I$ 对应了一个锥形 $V(I)$. 而齐次理想 $\mathfrak p$ 就对应射影空间的点...吗? 我们还需要排除一耳光病态的点: 也就是零点.
$$S_+=(x_0,\ldots,x_n)$$
所对应的零点集显然恰好就是 $(0,\ldots,0)$. 我们要求不含零点, 于是要求 $\mathfrak p\not\supset S_+$.

受仿射情况的启发, 若 $T$ 是 $S_\bullet$ 中齐次元素的集合, 可以作以下定义

>[!def] $\Proj$ 作为拓扑空间
>设 $I$ 是分次环 $S_\bullet$ 的齐次理想, 定义 $V_+(I)$ 为
>$$V_+(I)=\set{\mathfrak p\in\Proj\,S_\bullet\mid\mathfrak p\supset I}$$
>为 $\Proj\, S_\bullet$ 中包含 $I$ 的齐次素理想. 称之为 $I$ 的射影消失集. 这些集合的全体构成[[Zariski拓扑]]的闭集, 因为
> - $V_+(I)\cup V_+(J)=V_+(IJ)$, 因为 $\mathfrak p\supset IJ$ 当且仅当 $\mathfrak p\supset I$ 或 $\mathfrak p\supset J$.
> - $\bigcap_\alpha V_+(I_\alpha)=V_+(\sum_\alpha I_\alpha)$, 因为 $\mathfrak p\supset \sum_\alpha I_\alpha$ 当且仅当 $\mathfrak p\supset I_\alpha$ 对所有 $\alpha$.
>
>赋予了这个拓扑的 $\Proj\, S_\bullet$ 构成一个拓扑空间. 称之为 $\Proj\,S_\bullet$ 上的**Zariski拓扑**(Zariski topology).
>
>若 $T$ 是一个齐次元的集合, 则 $V_+(T):=V_+(\langle T\rangle)$.

类似地, 我们也记射影标准开集 $D_+(f)$ 为
$$D_+(f)=\Proj\,S_\bullet\setminus V_+(f)$$

>[!thm] 定理1
>全体 $D_+(f),f\in S_\bullet$ 是 $\Proj\, S_\bullet$ 的一组拓扑基.

>[!pf]
>首先, 任意 $D_+(f)$ 都是开集, 因为 $D_+(f)=\Proj\,S_\bullet\setminus V_+(f)$. 其次, 任意开集 $U$ 都可以表示为 $U=\bigcup_{\alpha} D_+(f_\alpha)$, 因为
>$$U=\Proj\,S_\bullet\setminus\bigcap_{\mathfrak p\in\Proj\,S_\bullet\setminus U} V_+(\mathfrak p)=\bigcup_{\mathfrak p\in\Proj\,S_\bullet\setminus U} D_+(\mathfrak p)$$
>其中 $\mathfrak p$ 是 $\Proj\,S_\bullet$ 中的点, 也是 $S_\bullet$ 中的齐次素理想. 因此 $D_+(\mathfrak p)$ 是 $S_\bullet$ 中的齐次元素, 从而 $D_+(\mathfrak p)=D_+(f)$ 对某个齐次元素 $f$ 成立. 

>[!thm] 定理2
>设 $f$ 是 $S_\bullet$ 的非零次齐次元, 则 $D_+(f)$ 上可以赋予结构层. 令
>$$\Gamma(D_+(f),\mc O_{D_+(f)})=((S_\bullet)_f)_0$$
>这一步对于任意 $D_+(f)$ 都成立, 因此自然决定了赋环空间. 并且 $\Spec\,((S_\bullet)_f)_0\simeq(D_+(f),\mc O_{D_+(f)})$ 是概形同构.

>[!pf]
>不妨记 $A:=((S_\bullet)_f)_0$.
>
>我们要定义同构 $\phi:D_+(f)\to\Spec\,A$. 对于 $D_+(f)$ 中的齐次素理想 $\mathfrak p$, 定义
>$$\phi:\mathfrak p\mapsto\mathfrak p (S_\bullet)_f\cap A$$
>首先, $\mathfrak p (S_\bullet)_f$ 是 $(S_\bullet)_f$ 中的理想, 因为 $\mathfrak p$ 是 $S_\bullet$ 中的理想. 其次, $\mathfrak p (S_\bullet)_f\cap A$ 是 $A$ 中的理想, 因为 $A$ 是 $(S_\bullet)_f$ 的子环. 最后, $\mathfrak p (S_\bullet)_f\cap A$ 是 $A$ 中的素理想, 因为 $\mathfrak p (S_\bullet)_f$ 是 $(S_\bullet)_f$ 中的素理想. 因此 $\phi$ 是良定义的.
>
>再构造 $\psi:\Spec\,A\to D_+(f)$, 对于 $\mathfrak q\in\Spec\, A$, 我们定义
>$$\psi:\mathfrak q\mapsto\bigoplus_{d\ge 0}\set{s\in S_d\mid s^{\deg f}/f^d\in\mathfrak q}$$
>首先, $\psi(\mathfrak q)$ 是 $S_\bullet$ 中的理想, 因为 $\psi(\mathfrak q)$ 是 $S_\bullet$ 中的齐次元素集合, 且对于 $s\in S_d$ 和 $t\in S_e$, 若 $s^{\deg f}/f^d\in\mathfrak q$ 和 $t^{\deg f}/f^e\in\mathfrak q$, 则 $(s+t)^{\deg f}/f^{\max(d,e)}\in\mathfrak q$ 和 $(st)^{\deg f}/f^{d+e}\in\mathfrak q$. 其次, $\psi(\mathfrak q)$ 是 $S_\bullet$ 中的素理想, 因为 $\psi(\mathfrak q)$ 是 $S_\bullet$ 中的齐次元素集合, 且对于 $s\in S_d$ 和 $t\in S_e$, 若 $(st)^{\deg f}/f^{d+e}\in\mathfrak q$, 则 $s^{\deg f}/f^d\in\mathfrak q$ 或 $t^{\deg f}/f^e\in\mathfrak q$. 最后, $\psi(\mathfrak q)$ 不包含无关理想 $S_+$, 因为 $\psi(\mathfrak q)$ 是 $S_\bullet$ 中的齐次元素集合, 且对于任意齐次元 $s$, 若 $s^{\deg f}/f^{\deg s}\in\mathfrak q$, 则 $\psi(\mathfrak q)$ 包含了一个非零次齐次元. 因此 $\psi$ 是良定义的.
>
>容易证明 $\phi$ 和 $\psi$ 是互逆的. 下面证明其连续. 对于 $D_+(f)$ 中的闭集 $V_+(I)$, 其原像 $\phi^{-1}(V(I))$ 是 $\Spec\,A$ 中的闭集, 因为 $\phi^{-1}(V(I))=V(\langle I\cup\{f\}\rangle)$. 对于 $\Spec\,A$ 中的闭集 $V(J)$, 其原像 $\psi^{-1}(V(J))$ 是 $D_+(f)$ 中的闭集, 因为 $\psi^{-1}(V(J))=V_+(\set{s\in S_\bullet\mid s^{\deg f}/f^{\deg s}\in J})$. 因此 $\phi$ 和 $\psi$ 都是连续的. 从而是同胚.
>
>最后验证概形同构. 考虑其结构层在主开集上的截面. 对于 $D_+(f)$ 上的截面, 其值域是 $((S_\bullet)_f)_0$. 对于 $\Spec\,A$ 上的截面, 其值域也是 $A$. 因此 $\phi$ 和 $\psi$ 都诱导了 $D_+(f)$ 和 $\Spec\,A$ 上结构层的同构. 从而 $D_+(f)$ 和 $\Spec\,A$ 是概形同构的.

上述定理启发我们将 $D_+(f)$ 和 $\Spec\,((S_\bullet)_f)_0$ 视为同一个东西.

下面我们要完成最终目的——构造 $\Proj\,S_\bullet$ 上的概形结构. 从上述定理显然构造了子空间映射
$$D_+(f)=\Spec\,((S_\bullet)_f)_0\hookrightarrow\Proj\,S_\bullet$$
并且后者Zariski拓扑限制在前者也是Zariski拓扑. 接下来我们要粘贴概形族, 由[[概形的余纤维积|此页面定理]]确保可行性, 我们希望它限制在 $D_+(f)$ 上时是 $\Spec\,((S_\bullet)_f)_0$ 的结构层 (事实上答案到这一步已经很明显了), 我们只需要最后一个定理.

>[!thm] 定理3
>设 $f,g\in S_+$ 是非零齐次元素, 则
>$$\Spec\,((S_\bullet)_{fg})_0\xto\sim D(g^{\deg f}/f^{\deg g})\subset\Spec\,((S_\bullet)_f)_0$$
>是一个概形同构.

上述定理的证明是简单的. 由此, 我们可以完成 $\Proj$ 的定义

>[!def] $\Proj$ 作为概形
>设分次环 $S_\bullet$ . 不妨记 $A_f$ 为 $((S_\bullet)_f)_0$, 则有概形同构 $D_+(f)\simeq\Spec\,{A_f}$.
>
>不妨令 $S_+$ 为指标集, 对任意 $f,g\in S_+$ 都有子概形
>$$\psi_{fg}:\Spec\, A_{fg}\xto\sim D(g^{\deg f}/f^{\deg g})\hookrightarrow\Spec\,A_f$$
>那么由[[概形的余纤维积|此页面定理]]可以粘贴唯一的概形 $\Proj\,S_\bullet$ 使得对于任意 $f\in S_+$ 都有子概形
$$\psi_f:\Spec\, A_f\hookrightarrow\Proj\,S_\bullet$$
并且对于任意 $f,g\in S_+$ 都有 $\psi_f\circ\psi_{fg}=\psi_g\circ\psi_{gf}$.

我们还有另一种定义 $\Proj$ 的视角, 对于 $\Proj\, S_\bullet$ 中的任何不包含无关理想的齐次素理想 $\mathfrak p$, 那么 $\mathfrak p$ 处的茎 $\mc O_\mathfrak p$ 可以指定为
$$\mc O_\mathfrak p=((S_\bullet)_\mathfrak p)_0=:A_\mathfrak p$$
接下来对 $\Proj\, S_\bullet$ 的任意开集 $U$, $\mc O(U)$ 定义为态射 $s:U\mapsto\coprod_{p\in U}{\mc O_p}$, 满足对于任意 $p\in U$, $s(p)\in\mc O_p$, 且对于任意 $p\in U$ 都存在 $f\in S_\bullet$ 和 $g\in S_\bullet$ 使得 $D_+(f)\subset U$, $s(q)=g/f^n$ 在 $D_+(f)$ 上成立. 这时 $\Proj\,S_\bullet$ 就是一个概形了.