#范畴论 

>[!def] Abel范畴
>若[[加性范畴]]$\frak C$满足:
>1. [[完备范畴&余完备范畴|有限完备]]以及[[完备范畴&余完备范畴|有限余完备]].
>2. 任意一个[[单态射&满态射|单态射]]都是某个态射的[[核&余核|核]].
>3. 任意一个[[单态射&满态射|满态射]]都是某个态射的[[核&余核|余核]].
>
>则称$\frak C$是一个**Abel范畴**(Abel category).

可以验证, $\sf AbGrp$, $\mathsf{Mod}_R$,都是Abel范畴.

>[!thm] 定理1
>设$\frak C$是Abel范畴, 则
>1. $\frak C$中态射$f$是单态射当且仅当$f=\ker\coker f=\im f$.
>2. $\frak C$中态射$g$是满态射当且仅当$g=\coker\ker g=\coim g$.

>[!pf]
>我们只证明1, 2对偶地可以得到.
>```tikz
\usepackage{tikz-cd}
\begin{document}
\Large
\begin{tikzcd}[row sep=large] && {A'} \\ \\ A && B && D \\ \\ && C
\arrow["t"', dashed, from=1-3, to=3-1]
\arrow["{f'}", from=1-3, to=3-3]
\arrow["0", from=1-3, to=3-5]
\arrow["0"{description, pos=0.7}, bend right=45, from=1-3, to=5-3]
\arrow["{f=\mathrm{ker}\,g}", hook, from=3-1, to=3-3]
\arrow["0"{description, pos=0.7},bend right=45, from=3-1, to=3-5]
\arrow["{r=\mathrm{coker}\,f}", from=3-3, to=3-5]
\arrow["g", from=3-3, to=5-3]
\arrow["h", dashed, from=3-5, to=5-3]
\end{tikzcd}
\end{document}
>```
>由Abel范畴的定义, 若$f:A\to B$是单态射, 则存在态射$g:B\to C$使得$f=\ker g$.
>现在另记$r=\coker f:B\to D$, 则存在唯一的态射 $h:D\to C$ 使得 $g=hr$. 若$f':A'\to B$ 满足 $rf'=0$, 则$gf'=hrf'=0$, 由$f=\ker g$,存在唯一的态射$t:A'\to A$使得$f'=ft$, 注意到$rf=0$ (余核的定义). 因此$f=\ker r=\ker\coker f$.

>[!thm] 定理2
>设$\frak C$是一个Abel范畴, 则
>1. $\frak C$中态射 $f$ 是单态射当且仅当$\ker f=0$.
>2. $\frak C$中态射 $g$ 是满态射当且仅当$\coker g=0$.

>[!pf]
>若 $f$ 是单态射, 则对任意的 $g:D\to A$, 由 $fg=0$ 可得 $g=0$. 从而 $\ker f=0$.
>
>反之, 若 $\ker f=0$, 对任意一对平行态射 $r,s:C\to A$ 满足 $fr=fs$ , 有 $f(r-s)=0$, 因此 $r-s$ 可以通过$\ker f=0$ 唯一分解, 故$r-s=0$, 从而 $r=s$.
>
>对偶地可以证明2.

>[!lem] 引理1
>设 $\frak C$ 是Abel范畴, 则$\frak C$中的态射 $f:A\to B$ 是同构当且仅当 $f$ 是单态射且是满态射, 即Abel范畴是[[单态射&满态射|平稳范畴]]. 全体单态射等价于正则单, 全体满态射等价于正则满.

>[!pf]
>显然Abel范畴中任何单态射都是某个态射的核 (等值子), 由[[等值子|此页面定理2]]即证.

>[!thm] 定理3 (态射的单满分解)
>设 $\frak C$ 是一个Abel范畴, 那么 $\frak C$ 中的任意态射 $f$ 都可以唯一地分解为 $f=me$. 使得 $m$ 是单态射, 而 $e$ 是满态射. 并且
>$$m=\ker\coker f=\im f,\quad e=\coker\ker f=\coim f$$

>[!pf]
>设 $f:A\to B$ 是Abel范畴$\frak C$中的一个态射, 我们先作如下构造:
>
>- 取 $f$ 的余核 $c=\coker f:B\to C$.
>- 取 $c$ 的核 $m=\ker c:D\to B$.
>
>如下图所示:
>```tikz
>\usepackage{tikz-cd} \begin{document} \Large \begin{tikzcd}[row sep=large] A && B && C \\ \\ && D \arrow["f", from=1-1, to=1-3] \arrow["0"{description}, bend left=30, from=1-1, to=1-5] \arrow["e"{description}, dashed, from=1-1, to=3-3] \arrow["c", two heads, from=1-3, to=1-5] \arrow["m"', hook, from=3-3, to=1-3] \arrow["0"{description}, from=3-3, to=1-5] \end{tikzcd} \end{document}
>```
>显然 $cm=0, cf=0$, 由核的泛性质存在唯一 $e:A\to D$ 使得 $f=me$. 对任意 $h:\cdot\to A$, 由 $m$ 是单态射, $fh=0$ 成立当且仅当 $eh=0$ 成立, 这是因为
>$$fh=0\iff meh=0\iff eh=0$$
>因此 $\ker f=\ker e$, 下面证明 $e$ 是满态射:
>不妨记 $r=\coker e: D\to E$, $t=\ker r: F\to D$. 由 $t$ 核的泛性质可知存在唯一的 $h:A\to F$ 使得下图表交换:
>```tikz
\usepackage{tikz-cd} \begin{document} \Large \begin{tikzcd}[row sep=large] A && B && C \\ \\ F && D && E \arrow["f", from=1-1, to=1-3] \arrow["h"', dashed, from=1-1, to=3-1] \arrow["e"{description}, dashed, from=1-1, to=3-3] \arrow["c", two heads, from=1-3, to=1-5] \arrow["t", hook, from=3-1, to=3-3] \arrow["m"', hook, from=3-3, to=1-3] \arrow["r", two heads, from=3-3, to=3-5] \end{tikzcd} \end{document}
>```
>显然 $mt$ 是单态射, 从而由Abel范畴性质存在态射 $s:B\to S$ 使得 $mt=\ker s$. 此时
>$$sf=smth=s(mt)h=s\ker s\,h=0h=0$$
>从而由余核 $c$ 的泛性质, 存在唯一态射 $q:C\to S$ 使得下图表交换:
>```tikz
>\usepackage{tikz-cd} \begin{document} \Large \begin{tikzcd}[row sep=large] && S \\ \\ A && B && C \\ \\ F && D && E \arrow["0"{description}, from=3-1, to=1-3] \arrow["f", from=3-1, to=3-3] \arrow["h"', dashed, from=3-1, to=5-1] \arrow["e"{description}, dashed, from=3-1, to=5-3] \arrow["s"', from=3-3, to=1-3] \arrow["c", two heads, from=3-3, to=3-5] \arrow["q"', dashed, from=3-5, to=1-3] \arrow["t", hook, from=5-1, to=5-3] \arrow["m"', hook, from=5-3, to=3-3] \arrow["r", two heads, from=5-3, to=5-5] \end{tikzcd} \end{document}
>```
>因此
>$$sm=qcm=(\ker c\circ c)m=0$$
>但是$\ker s=mt$, 再由核 $mt$ 的泛性质, 存在唯一 $l:D\to F$ 使得 $m=mtl$, 如下图所示:
>```tikz
\usepackage{tikz-cd} \begin{document} \Large \begin{tikzcd}[row sep=large] && S \\ \\ A && B && C \\ \\ F && D && E \arrow["f", from=3-1, to=3-3] \arrow["h"', dashed, from=3-1, to=5-1] \arrow["e"{description, pos=0.7}, dashed, from=3-1, to=5-3] \arrow["s"', from=3-3, to=1-3] \arrow["c", two heads, from=3-3, to=3-5] \arrow["q"', dashed, from=3-5, to=1-3] \arrow["0"{description, pos=0.7}, from=5-1, to=1-3] \arrow["mt"{description, pos=0.7}, hook, from=5-1, to=3-3] \arrow["t", hook, from=5-1, to=5-3] \arrow["0"{description, pos=0.7}, bend right=30, from=5-3, to=1-3] \arrow["m"', hook, from=5-3, to=3-3] \arrow["l"{description}, bend left=30, dashed, from=5-3, to=5-1] \arrow["r", two heads, from=5-3, to=5-5] \end{tikzcd} \end{document}
>```
>这表明, 在 $B$ 的[[子对象]]族 $\mathrm{Sub}(B)$ 里, 有
>$$(D,m)\le(F,mt)\quad (l)$$
>(关于这个记法, 参考[[子对象|此页面]]) 然而同样有
>$$(F,mt)\le(D,m)\quad(t)$$
>由[[子对象|此页面定理1]], $t$ 是一个同构, 因此 $t$ 是双态射 (引理1), 从而 $r=0$, 即 $\coker r=0$, 从而 $e$ 是满态射 (定理2).
>
>唯一性的证明是简单的, 设 $f:A\to B$ 具有分解 $f=m'e'$, 使得 $m'$ 单且 $e'$ 满. 则由 $e'$ 满可知对任意$h:B\to C$, $hf=0$ 当且仅当 $hm'=0$, 因此$\coker f=\coker m'$, 从而
>$$m'=\ker\coker m'=\ker\coker f=m$$
>对偶地可以证明 $e'=e$.

>[!thm] 定理4
>考虑Abel范畴中的方形
>```tikz
\usepackage{tikz-cd} \begin{document} \Large \begin{tikzcd}[row sep=large] A & B \\ C & D \arrow["f", from=1-1, to=1-2] \arrow["g"', from=1-1, to=2-1] \arrow["h", from=1-2, to=2-2] \arrow["k"', from=2-1, to=2-2] \end{tikzcd} \end{document}
>```
>那么:
>1. 该方形是交换的, 当且仅当复合 $$A\xrightarrow{\langle f,g\rangle}B\oplus C\xrightarrow{(-h,k)}D$$ 是零态射.
>	- $\langle f,g\rangle:A\to B\oplus C$ 是使得 $f=p_B\langle f,g\rangle,g=p_C\langle f,g\rangle$ 的唯一态射, 其中 $p_B:B\oplus C\to B, p_C:B\oplus C\to C$ 是射影. 
>	- $(-h,k):B\oplus C\to D$ 是使得 $-h=(-h,k)q_B, k=(-h,k)q_C$ 的唯一态射, q其中 $q_B:B\to B\oplus C,q_C:C\to B\oplus C$ 是余射影.
>```tikz
\usepackage{tikz-cd} \begin{document} \Large \begin{tikzcd}[row sep=large] A && B & A && B \\ & {B\oplus C} &&& {B\oplus C} \\ C && D & C && D \arrow["f", from=1-1, to=1-3] \arrow["{\langle f,g\rangle}", from=1-1, to=2-2] \arrow["g"', from=1-1, to=3-1] \arrow["h", from=1-3, to=3-3] \arrow["f", from=1-4, to=1-6] \arrow["g"', from=1-4, to=3-4] \arrow["{q_B}", from=1-6, to=2-5] \arrow["{-h}", from=1-6, to=3-6] \arrow["{p_B}"', from=2-2, to=1-3] \arrow["{p_C}"', from=2-2, to=3-1] \arrow["{(-h,k)}"', from=2-5, to=3-6] \arrow["k"', from=3-1, to=3-3] \arrow["{q_C}", from=3-4, to=2-5] \arrow["k"', from=3-4, to=3-6] \end{tikzcd} \end{document}
>```
>2. 该方形是拉回方形当且仅当 $\langle f,g\rangle=\ker(-h,k)$.
>3. 该方形是推出方形当且仅当 $(-h,k)=\coker\langle f,g\rangle$.

>[!pf]
>为了证明1. 事实上,
>$$(-h,k)\langle f,g\rangle=(-h,k)(q_Bp_B+q_Cp_C)\langle f,g\rangle$$
>通过拆分可得
>$$=((-h,k)q_Bp_B+(-h,k)q_Cp_C)\langle f,g\rangle=(-hp_B+kp_C)\langle f,g\rangle$$
>再次拆分可得
>$$=-hp_B\langle f,g\rangle+kp_C\langle f,g\rangle=-hf+kg$$
>因此 $(-h,k)\langle f,g\rangle=0$ 当且仅当$hf=kg$.
>
>为了证明2. 显然 $\langle f,g\rangle=\ker(-h,k)$ 当且仅当 $(-h,k)\langle f,g\rangle=0$, 并且若 $(-h,k)\langle f',g'\rangle=0$, 则 $\langle f',g'\rangle$ 可通过 $\langle f,g\rangle$ 唯一地分解, 等价的说法是 $f'$ 与 $g'$ 可以分别通过 $f$ 与 $g$ 唯一地分解, 即方形是拉回方形.
>
>对偶地可证明3.

>[!thm] 定理5
>4. Abel范畴中的(正则)满态射是拉回保持的.
>5. Abel范畴中的(正则)单态射是推出保持的.
>

>[!pf]
>只证明1. 由定理4并利用其证明过程中的约定, 作下图中的拉回:
>```tikz
\usepackage{tikz-cd} \begin{document} \Large \begin{tikzcd}[row sep=large] {A'} \\ & A && B \\ && {B\oplus C} \\ & C && D \arrow[dashed, from=1-1, to=2-2] \arrow[bend left=30, from=1-1, to=2-4] \arrow[bend right=30, from=1-1, to=4-2] \arrow["f", two heads, from=2-2, to=2-4] \arrow["{\langle f,g\rangle}"{description}, from=2-2, to=3-3] \arrow["g"', from=2-2, to=4-2] \arrow["{q_B}"{description}, shift left=2, from=2-4, to=3-3] \arrow["{-h}"', shift right, from=2-4, to=4-4] \arrow["h", shift left, from=2-4, to=4-4] \arrow["{p_B}"{description}, shift left=2, from=3-3, to=2-4] \arrow["{p_C}"{description}, shift right=2, from=3-3, to=4-2] \arrow["{(-h,k)}"{description}, from=3-3, to=4-4] \arrow["{q_C}"{description}, shift right=2, from=4-2, to=3-3] \arrow["k"', two heads, from=4-2, to=4-4] \end{tikzcd} \end{document}
>``` 
>并且令 $k:C\twoheadrightarrow D$ 是满态射, $k=(-h,k)q_C$, 由[[单态射&满态射|此页面定理1]], $(-h,k)$ 是满态射, 因此由定理4,
>$$(-h,k)=\coker\ker(-h,k)=\coker\langle f,g\rangle$$
>再次由定理4, 上方形是一个推出方形. 不妨设 $q:B\twoheadrightarrow Q$ 是 $f$ 的余核, 则 $qf=0g$, 由推出方形的性质存在唯一的态射 $r:D\to Q$ 使得 $0=rk,q=rh$, 即下图表交换:
>```tikz
\usepackage{tikz-cd} \begin{document} \begin{tikzcd}[row sep=large] {A'} \\ & A && B \\ \\ & C && D \\ &&&& Q \arrow[dashed, from=1-1, to=2-2] \arrow[bend left=30, from=1-1, to=2-4] \arrow[bend right=30, from=1-1, to=4-2] \arrow["f", two heads, from=2-2, to=2-4] \arrow["g"', from=2-2, to=4-2] \arrow["h", from=2-4, to=4-4] \arrow["{q=\mathrm{coker}\, f}", bend left=30, from=2-4, to=5-5] \arrow["k"', two heads, from=4-2, to=4-4] \arrow["0"', bend right=30, from=4-2, to=5-5] \arrow["r"{description}, dashed, from=4-4, to=5-5] \end{tikzcd} \end{document}
>```
>由于 $k$ 是满态射, $rk=0\implies r=0$, 从而有 $q=rh=0$, 由定理2就证明了 $f$ 是满态射.

>[!cor] 推论1
>Abel范畴中, 拉回保持核, 推出保持余核.

