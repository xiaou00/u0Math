#代数 

>[!def] Verdier商
>设 $\mathfrak N$ 为[[三角范畴]] $\mathfrak D$ 的对同构封闭的子三角范畴, 定义 $\mathfrak D/\mathfrak N=\mathfrak D[(S\mathfrak N)^{-1}]$ 其中
>$$S\mathfrak N:=\set{s\in\mathrm{Mor}(\mathfrak D)\,\Bigg|\begin{matrix}
\exists\text{ Dist. Tri } X\xto sY\to Z\xto{+1}\\
\text{ so that }Z\in\mathrm{ob}(\mathcal N)
\end{matrix}\,}$$
>称之为 $\mathfrak D$ 关于 $\mathfrak N$ 的**Verdier商**. 这里 $S\mathfrak N$ 是与三角兼容的乘性系.

>[!thm] 定理1 (Verdier商的普适性)
>设 $Q:\mathfrak D\to\mathfrak D/\mathfrak N$ 是局部化函子, 则:
>1. 对于 $\mathfrak D$ 中的任意态射 $f:X\to Y$, 我们有 $Qf=0$ 当且仅当 $f$ 能分解为 $X\to\mathfrak N\to Y$, 其中 $\mathfrak N\in\mathrm{ob}(\mathfrak N)$, 特别地 $Q$ 映 $\mathfrak N$ 为 $0$.
>2. 对于任意预三角范畴 $\mathfrak T$ 以及三角函子 $F:\mathfrak D\to\mathfrak T$ 满足 $F(\mathfrak N)=0$, 存在唯一的三角函子 $\overline F:\mathfrak D/\mathfrak N\to\mathfrak T$ 使得 $F=\overline F\circ Q$. 即 $F:\mathfrak D\xto Q\mathfrak D/\mathfrak N\xto{\overline F}\mathfrak T$.
>3. 对于每个[[Abel范畴]] $\mathfrak A$ 以及上同调函子 $H:\mathfrak D\to\mathfrak A$, 若 $H(\mathfrak N)=0$, 则存在唯一的上同调函子 $\overline H:\mathfrak D/\mathfrak N\to\mathfrak A$ 使得 $H=\overline H\circ Q$. 即 $H:\mathfrak D\xto Q\mathfrak D/\mathfrak N\xto{\overline H}\mathfrak A$.

