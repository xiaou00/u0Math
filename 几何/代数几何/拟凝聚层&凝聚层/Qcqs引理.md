#代数几何 

>[!def] Qcqs引理 (Quasi-Compact Quasi-Separated Lemma)
>设 $X$ 是[[Qcqs]]的[[概形]]. $\mc F$ 是 $X$ 上的[[拟凝聚层]], 且 $f\in\Gamma(X,\mc O_X)$ 是 $X$ 上的一个函数. 那么限制映射
>$$\mathrm{res}_{X_f\subset X}:\Gamma(X,\mc F)\to\Gamma(X_f,\mc F)$$
>恰好就是局部化映射. 即存在同构 $\Gamma(X,\mc F)_f\xto\sim\Gamma(X_f,\mc F)$ 使得下图表交换
>```tikz
\usepackage{tikz-cd} \usepackage{amsmath} \begin{document} \large\begin{tikzcd}[cramped] && {\Gamma(X_f,\mathcal F)} \\ {\Gamma(X,\mathcal F)} \\ && {\Gamma(X,\mathcal F)_f} \arrow["{\mathrm{res}_{X_f\subset X}}", from=2-1, to=1-3] \arrow["{-\underset{\Gamma(X,\mathcal O_X)}{\otimes}\Gamma(X,\mathcal O_X)}"', from=2-1, to=3-3] \arrow["\sim"', from=3-3, to=1-3] \end{tikzcd} \end{document}
>```

>[!pf]
>先证仿射情况, 设 $X=\Spec~A$ 是[[仿射概形]], 那么 $\mc F=\widetilde M$, 结论是定义性的:
>$$\Gamma(X_f,\widetilde M)=\Gamma(D(f),\widetilde M)=M_f$$
.
>由[[拟紧致]]性和[[拟分离]]性, 我们可以选取有限的仿射开覆盖 $\mc U=\set{U_i}_{i=1}^n$, 其中 $U_i=\Spec~A_i$.
>
> - **拟紧致** 确保了我们可以选取有限个 $U_i$.
> - **拟分离** 确保了任何两个 $U_i,U_j$ 的交仍然是拟紧致的.
> 
> 由层条件, 我们有图表
> $$\Gamma(X,\mc F)\to\prod_i{\Gamma(U_i,\mc F)}\rightrightarrows\prod_{i,j}{\Gamma(U_i\cap U_j,\mc F)}$$
> 其中 $\Gamma(X,\mc F)$ 是[[等值子]]. 下面我们证明 $\Gamma(X,\mc F)_f\simeq\Gamma(X_f,\mc F)$. 首先显然
> $$\Gamma(X_f,\mc F)=\mathrm{Eq}\left(\prod{\Gamma(U_i\cap X_f,\mc F)}\rightrightarrows\prod{\Gamma(U_i\cap U_j\cap X_f,\mc F)}\right)$$
> 代入仿射情形, $\Gamma(U_i\cap X_f,\mc F)\simeq\Gamma(U_i,\mc F)_f$. 从而
> $$\Gamma(X_f,\mc F)=\mathrm{Eq}\left(\prod{\Gamma(U_i,\mc F)_f}\rightrightarrows\prod{\Gamma(U_i\cap U_j,\mc F)_f}\right)$$
> 由于 $X$ 是Qcqs的, 上面的 $\prod$ 都有限. 由于局部化 $(-)_f$ 左正合且保持有限极限, 
> $$\Gamma(X_f,\mc F)\simeq\left[\mathrm{Eq}\left(\prod{\Gamma(U_i,\mc F)}\rightrightarrows\prod{\Gamma(U_i\cap U_j,\mc F)}\right)\right]_f$$
> 括号内部分就是 $\Gamma(X,\mc F)$, 从而 $\Gamma(X_f,\mc F)\simeq\Gamma(X,\mc F)_f$. 这就完成了证明.

