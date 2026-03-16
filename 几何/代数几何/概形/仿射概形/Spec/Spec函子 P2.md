#代数几何 

>[!def] 消失集
>设 $S$ 是[[环]] $A$ 的子集, 定义 $S$ 的**消失集**(vanishing set)为
>$$V(S)=\set{\mathfrak p\in\Spec(A)\mid S\subset\mathfrak p}$$

我们将用这个概念尝试去取代代数集. 我们已经验证了它具有和代数集的相似性质. 我们可以证明 $\Spec$ 的函子性:

>[!thm] 定理3
>$\Spec:\mathsf{Ring}\to\mathsf{Top}$ 是反变函子.

>[!pf]
>设 $f:A\to B$ 是环 $A$ 到环 $B$ 的一个态射, 则定义 $\Spec(f):\Spec(B)\to\Spec(A)$ 使得 $\Spec(f)(\mathfrak q)=f^{-1}(\mathfrak q)$, 其中 $\mathfrak q\in\Spec(B)$. 显然 $\Spec(f)(\mathfrak q)$ 是 $A$ 的一个素理想, 从而 $\Spec(f)$ 是一个函数. 下面证明 $\Spec(f)$ 是连续的, 设 $I$ 是 $A$ 的一个理想, 则
>$$\begin{aligned}
\Spec(f)^{-1}(V(I))&=\set{\mathfrak q\in\Spec(B)\mid f^{-1}(\mathfrak q)\in V(I)}\\
&=\set{\mathfrak q\in\Spec(B)\mid I\subset f^{-1}(\mathfrak q)}\\
&=\set{\mathfrak q\in\Spec(B)\mid f(I)\subset\mathfrak q}=V(f(I))
\end{aligned}$$
>从而 $\Spec(f)$ 是连续的. 显然 $\Spec(\mathrm{id}_A)=\mathrm{id}_{\Spec(A)}$, 又设 $g:B\to C$ 是环 $B$ 到环 $C$ 的一个态射, 则 $\Spec(g\circ f)(\mathfrak r)=(g\circ f)^{-1}(\mathfrak r)=f^{-1}(g^{-1}(\mathfrak r))=\Spec(f)(\Spec(g)(\mathfrak r))$, 从而 $\Spec(g\circ f)=\Spec(f)\circ\Spec(g)$. 这就证明了 $\Spec$ 是一个反变函子.

>[!cor] 推论1
>设 $I,S\subset R$ 分别是 $R$ 的理想和乘性子集, 则
>1. $\Spec(R/I)$ 是 $\Spec(B)$ 的闭子集.
>2. 若 $S$ 形如 $\set{1,f,f^2,\cdots}\,(f\in R)$, 则 $\Spec(S^{-1}R)$ 是 $\Spec(R)$ 的开子集.
>3. 上述两个空间赋予的拓扑为子空间拓扑.

>[!pf]
>结论3可以直接由反变函子性得出, 下面证明结论1, 设 $\pi:R\to R/I$ 是自然投射, 则 $\Spec(\pi):\Spec(R/I)\to\Spec(R)$ 是一个连续函数, 设 $\mathfrak q\in\Spec(R/I)$, 则 $\Spec(\pi)(\mathfrak q)=\pi^{-1}(\mathfrak q)$ 是 $R$ 的一个素理想, 从而 $\Spec(\pi)$ 是一个函数. 下面证明 $\Spec(\pi)$ 是一个拓扑嵌入. 设 $J$ 是 $R/I$ 的一个理想, 则
>$$\begin{aligned}
\Spec(\pi)^{-1}(V(J))&=\set{\mathfrak q\in\Spec(R/I)\mid \pi^{-1}(\mathfrak q)\in V(J)}\\
&=\set{\mathfrak q\in\Spec(R/I)\mid J\subset\pi^{-1}(\mathfrak q)}\\
&=\set{\mathfrak q\in\Spec(R/I)\mid \pi(J)\subset\mathfrak q}=V(\pi(J))
\end{aligned}$$
>从而 $\Spec(\pi)$ 是连续的. 又设 $\mathfrak p\in\Spec(R)$ 满足 $\mathfrak p\in\Spec(\pi)(\Spec(R/I))$, 则存在 $\mathfrak q\in\Spec(R/I)$ 使得 $\pi^{-1}(\mathfrak q)=\mathfrak p$, 从而 $\pi(\mathfrak p)=\mathfrak q$ 是 $R/I$ 的一个素理想, 从而 $\mathfrak p\supset I$, 从而 $\mathfrak p\in V(I)$. 反过来, 设 $\mathfrak p\in V(I)$, 则 $\pi(\mathfrak p)$ 是 $R/I$ 的一个素理想, 从而 $\pi^{-1}(\pi(\mathfrak p))$ 是 $R$ 的一个素理想, 又 $\pi^{-1}(\pi(\mathfrak p))\subset\mathfrak p$, 但是 $\pi^{-1}(\pi(\mathfrak p))\supset\mathfrak p$, 从而 $\pi^{-1}(\pi(\mathfrak p))=\mathfrak p$, 从而 $\mathfrak p\in\Spec(\pi)(\Spec(R/I))$. 从而 $\Spec(\pi)(\Spec(R/I))=V(I)$, 从而 $\Spec(R/I)$ 是 $\Spec(R)$ 的一个闭子集.
>
>类似的方法可以证明结论2.

>[!def] 区别开集
>设 $R$ 是环, $f\in R$, 定义**区别开集**(distinguished open set) 为
>$$D(f)=\set{\mathfrak p\in\Spec(R)\mid f\notin\mathfrak p}=\set{\mathfrak p\in\Spec(R)\mid f([\mathfrak p])\ne 0}$$
>他是不消失的轨迹, 即 $f$ 在 $\Spec(R)$ 上不为零的集合. 他也称为 $\Spec(R)$ 的**主开集**. 显然 $\Spec(R)\setminus D(f)=V(f)$.

>[!thm] 定理4
>$D(f)\cap D(g)=D(fg)$.

>[!pf]
>设 $\mathfrak p\in D(f)\cap D(g)$, 则 $f,g\notin\mathfrak p$, 从而 $fg\notin\mathfrak p$, 从而 $\mathfrak p\in D(fg)$. 反过来, 设 $\mathfrak p\in D(fg)$, 则 $fg\notin\mathfrak p$, 从而 $f\notin\mathfrak p$ 且 $g\notin\mathfrak p$, 从而 $\mathfrak p\in D(f)\cap D(g)$. 从而 $D(f)\cap D(g)=D(fg)$.

>[!cor] 推论2
>设 $R$ 是环, 则 $\set{D(f)\mid f\in R}$ 是 $\Spec(R)$ 的一组拓扑基.

>[!thm] 定理5
>设 $A=A_1\times\cdots\times A_n$, 则
>$$\Spec(A)\simeq\Spec(A_1)\sqcup\cdots\sqcup\Spec(A_n)$$

>[!pf]
>只须证明二元情形. 设 $A=A_1\times A_2$, 则 $A$ 的一个元素 $a$ 可以表示为 $a=(a_1,a_2)$, 其中 $a_1\in A_1,a_2\in A_2$. 设 $\mathfrak p\in\Spec(A)$, 则 $A/\mathfrak p$ 是一个域, 从而 $A/\mathfrak p$ 的一个非零元素是可逆的. 设 $\overline{(1,0)}$ 是 $A/\mathfrak p$ 的一个非零元素, 则 $\overline{(1,0)}$ 是可逆的, 从而存在 $\overline{(a_1,a_2)}\in A/\mathfrak p$ 使得 $\overline{(1,0)}\cdot\overline{(a_1,a_2)}=\overline{(a_1,a_2)}=\overline{(1,0)}$, 从而 $\overline{(0,a_2)}=\overline{(0,0)}$, 从而 $(0,a_2)\in\mathfrak p$. 由于 $\mathfrak p$ 是素理想, 从而 $(0,1)\in\mathfrak p$, 从而 $\mathfrak p=A_1\times\mathfrak q$, 其中 $\mathfrak q=A_2$ 的一个素理想. 同样地, 若 $\overline{(0,1)}$ 是 $A/\mathfrak p$ 的一个非零元素, 则 $\mathfrak p=\mathfrak q\times A_2$, 其中 $\mathfrak q=A_1$ 的一个素理想. 从而 $A$ 的一个素理想要么是 $A_1\times\mathfrak q$, 要么是 $\mathfrak q\times A_2$. 反过来, 任意 $A_1$ 的一个素理想 $\mathfrak q$ 都可以得到 $A$ 的一个素理想 $A_1\times\mathfrak q$, 任意 $A_2$ 的一个素理想 $\mathfrak q'$ 都可以得到 $A$ 的一个素理想 $\mathfrak q'\times A_2$. 从而 $A$ 的素理想要么是 $A_1\times\mathfrak q$, 要么是 $\mathfrak q\times A_2$. 从而 $\Spec(A)\simeq\Spec(A_1)\sqcup\Spec(A_2)$.

>[!thm] 定理6
>$\Spec (A)$ 是**拟紧致** (quasicompact)的, 其所有主开集是拟紧致的, 即开覆盖必然存在有限子覆盖.

>[!pf]
>设开覆盖
>$$X=\bigcup_{i\in I}D(f_i)$$
>其中 $f_i\in R$ 转化为理想关系, 即
>$$\bigcap_{i\in I}{V(f_i)}=\O$$
>这意味着, 没有任何素理想包含 $\set{f_i}_{i\in I}$. 那么这族元素生成的理想 $J$ 满足
>$$V(J)=\O$$
>从而 $J=R$, 从而存在 $a_1,\ldots,a_n\in R$ 和 $i_1,\ldots,i_n\in I$ 使得
>$$a_1f_{i_1}+\cdots+a_nf_{i_n}=1$$
>从而 $D(f_{i_1})\cup\cdots\cup D(f_{i_n})=X$. 从而 $X$ 的开覆盖必然存在有限子覆盖. 同样的方法可以证明每个主开集也是拟紧致的.

