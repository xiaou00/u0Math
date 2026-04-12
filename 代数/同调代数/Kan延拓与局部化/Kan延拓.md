#代数 

总的来说, Kan延拓就是在回答一个核心问题: "如果我们只知道一个函子在部分领域如何运作, 如何用最自然的方式将其推广到整个领域?" 用抽象话来说, 不妨考虑范畴 $\mathfrak C,\mathfrak D,\mathfrak E$ 以及函子 $K,F$ 如下图所示
```tikz
\usepackage{tikz-cd} \usepackage{amsfonts} \begin{document} \large \begin{tikzcd}[row sep=large] {\mathfrak C} \\ \\ {\mathfrak D} && {\mathfrak E} \arrow["K"', from=1-1, to=3-1] \arrow["F", bend left=30, from=1-1, to=3-3] \arrow["{\exists?L}"', dashed, from=3-1, to=3-3] \end{tikzcd} \end{document}
```

我们希望找到虚线所示的函子 $L$ 并连同函子同构 $F\simeq LK$, 然而此问题一般是无解的, 很大可能会出现 $f\in\mathrm{Mor}(\mathfrak C)$ 使得 $Kf$ 是同构而 $Ff$ 不是同构. 我们退而求其次去刻画一个最佳逼近:

>[!def] Kan延拓
>考虑范畴 $\mathfrak C,\mathfrak D,\mathfrak E$, 函子 $K:\mathfrak C\to\mathfrak D$ 和 $F:\mathfrak C\to\mathfrak E$.
>函子 $F$ 沿着 $K$ 的**左Kan延拓**(left Kan extension) 是指 $(\mathrm{Lan}_KF,\eta)$, 其中
>-  $\mathrm{Lan}_KF:\mathfrak D\to\mathfrak E$ 是函子.
>- $\eta:F\Rightarrow(\mathrm{Lan}_KF)K$ 是函子之间的态射 ([[自然变换]]).
>
>并且使得下述万有性质成立, 对任何资料 $L:\mathfrak D\to\mathfrak E$ 和 $\xi:F\Rightarrow LK$, 存在唯一的 $\chi:\mathrm{Lan}_KF\Rightarrow L$ 使得 $\xi=(\chi K)\eta$, 图解为:
>```tikz
\usepackage{tikz-cd} \usepackage{amsfonts} 
\begin{document} \large \begin{tikzcd}[row sep=large] {\mathfrak C} &&& {\mathfrak C} \\ \\ {\mathfrak D} && {\mathfrak E} & {\mathfrak D} && {\mathfrak E} \arrow["K"', from=1-1, to=3-1] \arrow[""{name=0, anchor=center, inner sep=0}, "F", bend left=30, from=1-1, to=3-3] \arrow["K"', from=1-4, to=3-4] \arrow[""{name=1, anchor=center, inner sep=0}, "F", bend left=30, from=1-4, to=3-6] \arrow["L"', from=3-1, to=3-3] \arrow[""{name=2, anchor=center, inner sep=0}, "{\mathrm{Lan}_KF}", from=3-4, to=3-6] \arrow[""{name=3, anchor=center, inner sep=0}, "L"', bend right=60, from=3-4, to=3-6] \arrow["\xi"', Rightarrow, from=0, to=3-1] \arrow["\eta"', Rightarrow, from=1, to=3-4] \arrow["\chi", Rightarrow, from=2, to=3] \end{tikzcd} \end{document}
>```
>函子 $F$ 沿 $K$ 的**右Kan延拓**(right Kan extension) 是指 $(\mathrm{Ran}_KF,\epsilon)$, 其中
>- $\mathrm{Ran}_KF:\mathfrak D\to\mathfrak E$ 是函子.
>- $\epsilon:(\mathrm{Ran}_KF)K\Rightarrow F$ 是函子之间的态射 ([[自然变换]]).
>
>并且使得下述万有性质成立, 对任何资料 $R:\mathfrak D\to\mathfrak E$ 和 $\delta:RK\Rightarrow F$, 存在唯一的 $\theta:R\Rightarrow\mathrm{Ran}_KF$ 使得 $\delta=\epsilon(\theta K)$, 图解为:
>```tikz
\usepackage{tikz-cd} \usepackage{amsfonts} 
\begin{document} \large \begin{tikzcd}[row sep=large] {\mathfrak C} &&& {\mathfrak C} \\ \\ {\mathfrak D} && {\mathfrak E} & {\mathfrak D} && {\mathfrak E} \arrow["K"', from=1-1, to=3-1] \arrow[""{name=0, anchor=center, inner sep=0}, "F", bend left=30, from=1-1, to=3-3] \arrow["K"', from=1-4, to=3-4] \arrow[""{name=1, anchor=center, inner sep=0}, "F", bend left=30, from=1-4, to=3-6] \arrow["R"', from=3-1, to=3-3] \arrow[""{name=2, anchor=center, inner sep=0}, "{\mathrm{Ran}_KF}", from=3-4, to=3-6] \arrow[""{name=3, anchor=center, inner sep=0}, "R"', bend right=60, from=3-4, to=3-6] \arrow["\delta"', Rightarrow, from=3-1, to=0] \arrow["\epsilon"', Rightarrow, from=3-4, to=1] \arrow["\theta", Rightarrow, from=3, to=2] \end{tikzcd} \end{document}
>```

备注: Kan延拓的定义中, 有时会省略态射 $\eta$ 和 $\epsilon$, 直接将 Kan延拓 定义为函子 $\mathrm{Lan}_KF$ 和 $\mathrm{Ran}_KF$. 上图中的 $\chi K$ 和 $\theta K$ 其实都是 $\chi\circ\mathbb 1_K$, $\theta\circ\mathbb 1_K$ 的简写. 称之为**水平复合**.

若引入函子范畴 $\mathsf{Fct}(\mathfrak C,\mathfrak E)$ 和 $\mathsf{Fct}(\mathfrak D,\mathfrak E)$, 则左右Kan延拓的泛性质分别断言为态射
$$\begin{aligned}
\Hom_{\mathsf{Fct}(\mathfrak D,\mathfrak E)}(\mathrm{Lan}_KF,L)&\overset{1:1}{\longrightarrow}\Hom_{\mathsf{Fct}(\mathfrak C,\mathfrak E)}(F,LK)\\
\chi&\longmapsto(\chi K)\eta
\end{aligned}$$
和
$$\begin{aligned}
\Hom_{\mathsf{Fct}(\mathfrak D,\mathfrak E)}(R,\mathrm{Ran}_KF)&\overset{1:1}{\longrightarrow}\Hom_{\mathsf{Fct}(\mathfrak C,\mathfrak E)}(RK,F)\\
\theta&\longmapsto\epsilon(\theta K)
\end{aligned}$$
其逆分别是 $(L,\xi)\mapsto\chi$ 和 $(R,\delta)\mapsto\theta$.

>[!thm] 定理1
>给定范畴 $\mathfrak C,\mathfrak D,\mathfrak E$ 和函子 $K:\mathfrak C\to\mathfrak D$, $F:\mathfrak C\to\mathfrak E$, 则 $F$ 沿 $K$ 的左Kan延拓 $\mathrm{Lan}_KF$ 和右Kan延拓 $\mathrm{Ran}_KF$ 都存在且唯一(至自然同构).

>[!thm] 定理2
>函子 $F:\mc C\to\mc D$ 的[[极限]]可以表为
>$$\lim F=\mathrm{Ran}_EF$$
>其中 $E:\mc C\to\mathbb 1$ 是常函子.

