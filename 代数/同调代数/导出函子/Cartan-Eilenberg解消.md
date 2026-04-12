#代数 

>[!def] Cartan-Eilenberg解消
>设[[Abel范畴]] $\mathfrak A$ 具有足够的[[内射对象&投射对象]], 对于 $\mathsf{Ch}^+(\mathfrak A)$ 的每个对象 $X$, 存在满足下列条件的[[双复形]] $I$, 连同 $\mathsf{Ch}(\mathfrak A)$ 中的态射
>$$\epsilon:X\to(I^{\bullet,0},{^\rightarrow d}^{\bullet,0})$$
>其中 ${^\rightarrow d}$ 和 ${^\uparrow d}$ 均来自双复形结构, 并且:
>1. 对所有 $(p,q)\in\Z^2$, 都有 $q<0\implies I^{p,q}=0$.
>2. 取 $N\in\Z$ 使得 $n<N\implies X^n=0$. 则对所有 $(p,q)\in\Z^2$ 都有 $p<N\implies I^{p,q}=0$.
>3. 对每个 $p\in\Z$, 都有 $X^p\in\mathrm{ob}(\mathfrak A)$ 的[[解消|内射解消]] $$0\to X^p\xrightarrow{\epsilon^p}I^{p,0}\xrightarrow{{^\uparrow d}^{p,0}}I^{p,1}\xrightarrow{{^\uparrow d}^{p,1}}\cdots$$
>4. 上述态射诱导 $\ker d^p_X$ 的内射解消 $$0\to\ker d^p_X\to\ker{{^\rightarrow d}^{p,0}}\to\ker{{^\rightarrow d}^{p,1}}\to\cdots$$
>5. 上述态射诱导 $\mathrm{im}\,d^p_X$ 的内射解消 $$0\to\mathrm{im}\,d^p_X\to\mathrm{im}\,{^\rightarrow d}^{p,0}\to\mathrm{im}\,{^\rightarrow d}^{p,1}\to\cdots$$
>6. 上述态射诱导 $H^p(X)$ 的内射解消 $$0\to H^p(X)\to \underbrace{H^p(I^{\bullet,0})\to H^p(I^{\bullet,1})\to\cdots}_{\text{Hence}\,H^p_\mathrm{I}(I)}$$
>
>则称 $X\xrightarrow{\epsilon}I$ 为 $X$ 的**Cartan-Eilenberg解消** (Cartan-Eilenberg resolution). 第6条是第4和第5条的直接推论, 由短正合列
>$$0\to\ker d^p_X\to X^p\to\mathrm{im}\,d^p_X\to0$$
>诱导的长正合列可知. (第1,2,3条可参考图1; 第4,5,6条可参考图2)

```tikz
\usepackage{tikz-cd} \begin{document} \large \begin{tikzcd}[column sep=tiny] &&&&&&&&& \textcolor{rgb,255:red,51;green,153;blue,255}{\vdots} & \vdots \\ &&&&&&&& \cdots & \textcolor{rgb,255:red,51;green,153;blue,255}{{I^{p,1}}} & {I^{p+1,1}} & \cdots \\ {\Bigg[} & 0 & \cdots & \textcolor{rgb,255:red,51;green,153;blue,255}{{X^{p}}} & {X^{p+1}} & \cdots & {\Bigg]} & {\Bigg[} & \cdots & \textcolor{rgb,255:red,51;green,153;blue,255}{{I^{p,0}}} & {I^{p+1,0}} & \cdots & {\Bigg]} \\ &&&&&&&& \cdots & 0 & 0 & \cdots \arrow[from=2-9, to=2-10] \arrow[color={rgb,255:red,51;green,153;blue,255}, from=2-10, to=1-10] \arrow[from=2-10, to=2-11] \arrow[from=2-11, to=1-11] \arrow[from=2-11, to=2-12] \arrow[from=3-2, to=3-3] \arrow[from=3-3, to=3-4] \arrow[from=3-4, to=3-5] \arrow[color={rgb,255:red,51;green,153;blue,255}, bend right=60, from=3-4, to=3-10] \arrow[from=3-5, to=3-6] \arrow["\epsilon", from=3-7, to=3-8] \arrow[from=3-9, to=3-10] \arrow[color={rgb,255:red,51;green,153;blue,255}, from=3-10, to=2-10] \arrow["{{^\rightarrow d^{p,0}_I}}"', from=3-10, to=3-11] \arrow[from=3-11, to=2-11] \arrow[from=3-11, to=3-12] \arrow[from=4-9, to=4-10] \arrow[from=4-10, to=3-10] \arrow[from=4-10, to=4-11] \arrow[from=4-11, to=3-11] \arrow[from=4-11, to=4-12] \end{tikzcd} \end{document}
```
<center>图1</center>

```tikz
\usepackage{tikz-cd} \begin{document} \large \begin{tikzcd} && \textcolor{rgb,255:red,153;green,92;blue,214}{\vdots} && \textcolor{rgb,255:red,214;green,92;blue,92}{\vdots} \\ && \textcolor{rgb,255:red,153;green,92;blue,214}{{\ker{^\rightarrow d^{p,1}_I}}} & \textcolor{rgb,255:red,51;green,153;blue,255}{\vdots} & \textcolor{rgb,255:red,214;green,92;blue,92}{{\mathrm{im}\,{^\rightarrow d^{p,1}_I}}} \\ && \textcolor{rgb,255:red,153;green,92;blue,214}{{\ker{^\rightarrow d^{p,0}_I}}} & \textcolor{rgb,255:red,51;green,153;blue,255}{{I^{p,1}}} & \textcolor{rgb,255:red,214;green,92;blue,92}{{\mathrm{im}\,{^\rightarrow d^{p,0}_I}}} \\ & 0 & \cdots & \textcolor{rgb,255:red,51;green,153;blue,255}{{I^{p,0}}} && {I^{p+1,0}} & \cdots \\ && \textcolor{rgb,255:red,153;green,92;blue,214}{{\ker d^p_X}} && \textcolor{rgb,255:red,214;green,92;blue,92}{{\mathrm{im}\,d^p_X}} \\ {\Bigg[} & 0 & \cdots & \textcolor{rgb,255:red,51;green,153;blue,255}{{X^{p}}} && {X^{p+1}} & \cdots & {\Bigg]} \arrow[color={rgb,255:red,153;green,92;blue,214}, from=2-3, to=1-3] \arrow[hook, from=2-3, to=3-4] \arrow[color={rgb,255:red,214;green,92;blue,92}, from=2-5, to=1-5] \arrow[color={rgb,255:red,153;green,92;blue,214}, from=3-3, to=2-3] \arrow[hook, from=3-3, to=4-4] \arrow[color={rgb,255:red,51;green,153;blue,255}, from=3-4, to=2-4] \arrow[two heads, from=3-4, to=2-5] \arrow[color={rgb,255:red,214;green,92;blue,92}, from=3-5, to=2-5] \arrow[from=4-2, to=4-3] \arrow[from=4-3, to=4-4] \arrow[color={rgb,255:red,51;green,153;blue,255}, from=4-4, to=3-4] \arrow[two heads, from=4-4, to=3-5] \arrow["{{^\rightarrow d^{p,0}_I}}"'{pos=0.7}, from=4-4, to=4-6] \arrow[from=4-6, to=4-7] \arrow[color={rgb,255:red,153;green,92;blue,214}, from=5-3, to=3-3] \arrow[hook, from=5-3, to=6-4] \arrow[color={rgb,255:red,214;green,92;blue,92}, from=5-5, to=3-5] \arrow[from=6-2, to=6-3] \arrow[from=6-3, to=6-4] \arrow["{\epsilon^p}", color={rgb,255:red,51;green,153;blue,255}, from=6-4, to=4-4] \arrow[two heads, from=6-4, to=5-5] \arrow["{d^p_X}"{pos=0.7}, from=6-4, to=6-6] \arrow[from=6-6, to=6-7] \end{tikzcd} \end{document}
```
<center>图2</center>

>[!pf] 存在性的证明
>取 $N\in\Z$ 使得 $n<N\implies X^n=0$. 不妨记 
>$$Z^p=\ker d^p_X,\quad B^{p+1}=\im d^p_X,\quad H^p=H^p(X)$$
>他们都是 $\mathfrak A$ 中的对象. 我们已经定义了短正合列
>$$\begin{matrix}
0\to Z^N\to X^N\to B^{N+1}\to 0& 0\to B^{N+1}\to Z^{N+1}\to H^{N+1}\to 0\\
0\to Z^{N+1}\to X^{N+1}\to B^{N+2}\to 0& 0\to B^{N+2}\to Z^{N+2}\to H^{N+2}\to 0
\end{matrix}$$
>依次类推. 由于 $\mathfrak A$ 具有足够的内射对象, 我们可以为每个 $H^n$ 选取内射解消, 并且当 $n<N$ 时取值为 $0\to0$. 过程如下:
>- 注意到 $Z^N=H^N$, 由[[马蹄引理]], 我们可以取 $X^N$ 的内射解消 $$0\to X^N\xrightarrow{\epsilon^N}I^{N,0}\xrightarrow{{^\uparrow d}^{N,0}}I^{N,1}\xrightarrow{{^\uparrow d}^{N,1}}\cdots$$ 并且与第一个短正合列相容.
>- 其次由[[马蹄引理]]将 $B^{N+1}$ 连同 $H^{N+1}$ 的内射解消一道扩充为 $Z^{N+1}$ 的内射解消, 与第二个短正合列相容.
>- 重复, 直到为所有 $X^n$ 构造出内射解消.
>
>上面的构造也指明了如何构造 $I^{n,m}\to I^{n,m+1}$. (不展开说了zz) 从而就构造了所需的双复形 $I^{\bullet,\bullet}$ 以及态射 $\epsilon:X\to(I^{\bullet,0},{^\rightarrow d}^{\bullet,0})$.

