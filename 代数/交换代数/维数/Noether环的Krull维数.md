#代数 

>[!def] Noether环的Krull维数 & 理想的高度
>设 $R$ 是[[Noether模|Noether环]], 定义 $R$ 的**Krull维数**为[[素理想]]链
>$$\mathfrak p_0\subsetneq\mathfrak p_1\subsetneq\cdots\subsetneq\mathfrak p_n$$
>的最大长度 $n$. 记作 $\dim R$. 设 $\mathfrak p$ 是 $R$ 的一个素理想, 则形如
>$$\mathfrak p_0\subsetneq\mathfrak p_1\subsetneq\cdots\subsetneq\mathfrak p_m=\mathfrak p$$
>的素理想链的最大长度 $m$ 称为 $\mathfrak p$ 的**高度**, 记作 $\mathrm{ht}(\mathfrak p)$. 对于其余任给的理想 $I\trianglelefteq R$, 定义
>$$\mathrm{ht}(I)=\inf\set{\mathrm{ht}(\mathfrak p)\mid\mathfrak p\supset I,\,\mathfrak p\in\Spec(R)}$$
>设 $\mathfrak p$ 是包含 $I$ 的一个素理想, $\mathrm{ht}(\mathfrak p/I)$ 表示介于 $I$ 和 $\mathfrak p$ 之间的素理想链长度的事情就, 显然若 $\mathfrak p\subset\mathfrak q$ 是素理想则 $\mathrm{ht}(\mathfrak p)+\mathrm{ht}(\mathfrak q/\mathfrak p)\le\mathrm{ht}(\mathfrak q)$.

例如, $\dim(\Z)=1$, 这是因为 $\Z$ 的非零素理想都具有形式 $\langle p\rangle$. 其中 $p$ 是素数, 并且对于不同的素数 $p,q$ 总有 $\langle p\rangle\not\subset\langle q\rangle$. 类似地设 $\F$ 是域, $\F[x]$ 是[[主理想整环]], 因此 $\dim(\F[x])=1$.

>[!thm] 定理1
>设 $V$ 是一个[[代数集]], $A(V)$ 是[[坐标环]], 则 $\dim(V)=\dim(A(V))$.

>[!pf] 证明概要
>写出 $F^n$ 的代数集的一个不可约闭子集链, 将其对应到素理想链, 正反两面证明即可.

