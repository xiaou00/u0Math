#分析 

>[!theorem] Riesz-Fisher定理
>对任意$p\in[1,\infty]$, [[Lp空间]]对于范数诱导的[[度量空间|度量]]都是[[完备空间|完备]]的, 从而是[[Banach空间]]. 即对任意函数列$(f_n)\subset \ms{L}^p$, 

>[!proof]
>不妨设$(f_n)\subset \ms{L}^p$是一个Cauchy列, 即对任意$\epsilon>0$, 存在$N\in\Z_+$使得
>$$n,m\ge N\implies \norm{f_n-f_m}_p=\left(\int_X{|f_n-f_m|^p\,\d\mu}\right)^{1/p}<\epsilon$$
>我们只需证明$(f_n)$有一个收敛的子列, 由[[完备空间|此页面引理1]]就证明了定理. 对于每个$k$, 存在$n_k$使得
>$$\norm{f_{n_{k+1}}-f_{n_k}}<(1/2)^k$$
>定义一个非负可测函数$g$满足
>$$g(x)=|f_{n_1}(x)|+\sum_{k=1}^\infty{|f_{n_{k+1}}(x)-f_{n_k}(x)|}$$
>由[[广义Minkowski不等式]], 并由定义
>$$\norm{g}_p=\norm{|f_{n_1}|+\sum_{k=1}^\infty{|f_{n_{k+1}}-f_{n_k}|}}_p\le\norm{f_{n_1}}_p+\sum_{k=1}^\infty{\norm{f_{n_{k+1}}-f_{n_k}}_p}\le \norm{f_{n_1}}+\sum_{k=1}^\infty{(1/2)^k}$$
>不等式右边是[[几何级数]]且收敛到1, 由于$(f_n)$是Cauchy列, $\norm{f_{n_1}}_p<\infty$, 因此
>$$\norm{g}_p\le\norm{f_{n_1}}_p+1<\infty$$
>这就证明了$g\in \ms{L}^p$. 下面我们来证明$(f_{n_k})$几乎处处收敛, 由于级数$\sum_{k=1}^\infty{|f_{n_{k+1}}(x)-f_{n_k}(x)|}$收敛, 从而对a.e. $x$, 级数
>$$\sum_{k=1}^\infty{(f_{n_{k+1}}(x)-f_{n_k}(x))}$$
>收敛于有限值, 从而
>$$f_{n_K}(x)=f_{n_1}(x)+\sum_{k=1}^{K-1}(f_{n_{k+1}}(x)-f_{n_k}(x))$$
>收敛到有限值, 于是令
>$$f(x)=\lim_{K\to\infty}{f_{n_K}(x)}\quad \rm{a.e.}$$
>于是子序列$(f_{n_k})$几乎处处收敛于$f$. 下面证明$f\in \ms{L}^p$, 显然
>$$|f_{n_k}(x)|\le |f_{n_1}(x)|+\sum_{k=1}^{K-1}|f_{n_{k+1}}(x)-f_{n_k}(x)|\le g(x)\quad\rm{a.e.}$$
>取极限得
>$$|f(x)|\le|g(x)|\quad\rm{a.e.}$$
>从而
>$$\int_X{|f|^p\,\d\mu}\le\int_X{|g|^p\,\d\mu}<\infty$$
>因此$f\in \ms{L}^p$. 下面证明子序列收敛于$f$, 即证
>$$\lim_{k\to\infty}{\norm{f_{n_k}-f}_p}=0$$
>我们已经证明了其几乎处处逐点收敛到$f$, 下面我们证明其在$\ms{L}^p$范数下收敛: 对任意$k$, 
>$$|f_{n_k}(x)-f(x)|^p=\lim_{m\to\infty}{|f_{n_k}(x)-f_{n_m}(x)|^p}\quad\rm{a.e.}$$
>对任意$\epsilon>0$, 存在$N$使得$n,m\ge N\implies\norm{f_n-f_m}_p<\epsilon$, 取$n_k\ge N$, 
>$$\int_X{|f_{n_k}-f_{n_m}|^p\,\d\mu}=\norm{f_{n_k}-f_{n_m}}_p^p<\epsilon^p$$
>固定$k$, 让$m\to\infty$, 由[[Fatou引理]], 
>$$\int_X{\liminf_{m\to\infty}{|f_{n_k}-f_{n_m}|^p\,\d\mu}}\le\liminf_{m\to\infty}{\int_X{|f_{n_k}-f_{n_m}|^p\,\d\mu}}$$
>代入$f$定义,
>$$\int_X{|f_{n_k}-f|^p\,\d\mu}\le\liminf_{m\to\infty}{\epsilon^p}=\epsilon^p$$
>这就证明了$\norm{f_{n_k}-f}\le \epsilon$, 于是子序列在$\ms{L}^p$范数下收敛到$f$. 证毕.
