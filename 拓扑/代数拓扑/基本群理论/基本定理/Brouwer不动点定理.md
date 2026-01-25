#代数拓扑 

>[!thm] Brouwer不动点定理
>设 $f:\mathbb D^n\to\mathbb D^n$ 是[[连续映射]], 则存在一点 $x\in\mathbb D^n$ 使得 $f(x)=x$.

>[!pf]
>假设对所有 $x\in\mathbb D^n$, 都有 $f(x)\ne x$, 则我们可以从 $f(x)$ 出发过 $x$ 作一条射线使得其与圆盘的边界交与一点, 记为 $F(x)$. 这样我们就定义了映射 $F:\mathbb D^n\to \mathbb S^{n-1}$. 若 $x$ 本来就在边界上, 那么显然 $F(x)=x$. 容易证明 $F$ 连续, 于是 $F$ 是一个连续收缩, 然而 $\mathbb D^n\to\mathbb S^{n-1}$ 的连续收缩是不存在的.

