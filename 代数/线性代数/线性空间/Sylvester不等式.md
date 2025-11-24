#线性代数 

>[!theorem] Sylvester不等式
>对于[[线性空间]]$V$上的任意[[线性变换]]$f,g$, 有不等式$$\begin{aligned}
\rank{f}+\rank{g}-\dim{V}\le&\rank{f\circ g}\le\rank{f}\\
&\rank{f\circ g}\le\rank{g}\\
\end{aligned}$$
>成立. 其中
>$\rank{f}+\rank{g}-\dim{V}=\rank{f\circ g}$成立的条件为$\ker{g}\cap\im{f}=\set{\vec{0}}$,
>$\rank{f\circ g}=\rank{f}$成立的条件为$\im{g}=V$, $\rank{f\circ g}=\rank{g}$成立的条件为$\ker{f}\cap\im{g}=\set{\vec{0}}$.

>[!proof]
>显然
$$\rank{f\circ g}=\dim{\im{f\circ g}}=\dim{f(\im{g})}\tag{1}$$
在空间$\im{g}$上应用秩-零化度定理, 得
$$\dim{\im{g}}=\dim(\im{f}\cap\im{g})+\dim(\ker{f}\cap\im{g})$$
由映射运算性质可以化为
$$\dim{\im{g}}=\dim\im{f\circ g}+\dim(\ker{f}\cap\im{g})$$
化简为
$$\dim{\im{g}}=\rank{f\circ g}+\dim(\ker{f}\cap\im{g})$$
于是
$$\rank(f\circ g)=\dim{\im{g}}-\dim(\ker{f}\cap\im{g})\tag{2}$$
其余显然

