---
aliases:
  - van Kampen定理
---
#代数拓扑 

>[!thm] Seifert-van Kampen定理 (Seifert-van Kampen Theorem)
>[[基本广群]]函子 $\Pi_1:\mathsf{Top}\to\mathsf{Grpd}$ 保持[[推出|余纤维积]].

>[!pf]
>我们要证明, 若空间 $X=U_1\cup U_2$, 其中 $U_1,U_2$ 为开集, $V=U_1\cap U_2$. 则下图在 $\mathsf{Grpd}$ 中是推出方形:
>```tikz
\usepackage{tikz-cd} \begin{document} \large \begin{tikzcd}[row sep=large] {\Pi_1(V)} && {\Pi_1(U_1)} \\ \\ {\Pi_1(U_2)} && {\Pi_1(X)} \\ &&& G \arrow["{\phi_1}", from=1-1, to=1-3] \arrow["{\phi_2}"', from=1-1, to=3-1] \arrow["{\psi_1}", from=1-3, to=3-3] \arrow["{F_1}", bend left=30, from=1-3, to=4-4] \arrow["{\psi_2}"', from=3-1, to=3-3] \arrow["{F_2}"', bend right=30, from=3-1, to=4-4] \arrow["{\exists!\Phi}"', dashed, from=3-3, to=4-4] \end{tikzcd} \end{document}
>```
>设 $\alpha: [0, 1] \to X$ 是 $X$ 中的一条路径. 由[[Lebesgue数引理]]. 由于 $U_1,U_2$ 覆盖 $X$, 则存在一个分割
>$$0=t_0<t_2<\cdots<t_n=1$$
>使得每个小段 $\alpha_i=\alpha|_{[t_{i-1},t_i]}$ 的像都完全落在 $U_1$ 或 $U_2$ 中. 令 $k_i=\set{1,2}$. 使得 $\alpha_i([t_{i-1},t_i])\subset U_{k_i}$. 我们不妨将每一小段视为 $\Pi_1(U_{k_i})$ 中的态射, 定义
>$$\Phi([\alpha]) = F_{k_1}([\alpha_1]) \cdot F_{k_2}([\alpha_2]) \cdot \ldots \cdot F_{k_n}([\alpha_n])$$
>其中积是广群 $\mathbf G$ 中进行的. 
>
>我们需要证明 $\Phi([\alpha])$ 不依赖于分割的选择, 也不依赖于同伦类中的代表元. 如果增加分割点, 由于 $F_1, F_2$ 在交集 $V$ 上通过 $\Pi_1(V)$ 达成一致. 利用广群的组合性质, 乘积结果不变.
>
>下面证明同伦不变性, 即如果两条路径 $\alpha,\beta:[0,1]\to X$ 在 $X$ 中同伦, 则它们在广群 $\mb G$ 中的像 $\Phi([\alpha])$ 和 $\Phi([\beta])$ 相等.
>
>由 $[0,1]\times[0,1]$ 的紧致性, 设 $\mc H:[0,1]\times[0,1]\to X$ 是从 $\alpha$ 到 $\beta$ 的同伦, 其中 $\mc H(s, 0) = \alpha(s)$, $\mc H(s, 1) = \beta(s)$, 且固定端点. 由[[Lebesgue数引理]], 存在一个正整数 $n$. 使得将 $I \times I$ 分割成 $n \times n$ 个小正方形 $R_{i,j}$ 后，每个小正方形的像 $\mc H(R_{i,j})$ 都完全包含在 $U_1$ 或 $U_2$ 中
>
>对于每个 $R_{i,j}$, 其边界由四条小路径组成: 底边 $b$, 顶边 $t$, 左边 $l$, 右边 $r$. 由于整个 $\mc H(R_{i,j})$ 都在某个 $U_k$ ($k=1$ 或 $2$) 中, 在 $U_k$ 的基本广群 $\Pi_1(U_k)$ 中, 路径类满足:
>$$[b] \cdot [r] = [l] \cdot [t]$$
>由于我们定义的 $\Phi$ 在 $U_k$ 上与 $F_k$ 一致, 而 $F_k$ 是广群态射(函子), 它保持这种代数关系. 因此在目标广群 $\mb G$ 中:
>$$F_k([b]) \cdot F_k([r]) = F_k([l]) \cdot F_k([t])$$
>在相邻小格子 $R_{i,j}$ 和 $R_{i+1,j}$ 的公共边上, 如果一个属于 $U_1$ 另一个属于 $U_2$, 由于 $F_1, F_2$ 在交集 $V$ 上通过 $\Pi_1(V)$ 的映射是一致的 (这是余纤维积的前提条件), 它们在公共边上的取值在 $\mb G$ 中是完全相同的.
>
>唯一性是显然的, 因为 $\Pi_1(X)$ 作为广群由 $U_1,U_2$ 中路径类生成, 满足条件的 $\Phi$ 在这些生成元上完全由 $F_1,F_2$ 决定. 

>[!thm] 经典 Seifert van-Kampen定理
>设 $U_1,U_2$ 是覆盖空间 $X$ 的开子空间偶. $U_1\cap U_2$ 非空且道路连通, 则
>$$\pi_1(X)\cong\pi_1(U_1)*_{\pi_1(U_1\cap U_2)}\pi_1(U_2)$$
>其中 $*$ 是群的余纤维积 (共和积).

