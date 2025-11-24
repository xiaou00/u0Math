#分析 

>[!lemma] Fatou引理
>设$(X,\mc F,\mu)$是一个[[测度空间]], $(f_n)$是一个非负[[可测映射|可测函数]]序列, 则
>$$\int_X{\left(\liminf_{n\to\infty}{f_n}\right)\,\d\mu}\le\liminf_{n\to\infty}\left(\int_X{f_n\,\d\mu}\right)$$

>[!proof]
> 不妨令
> $$g_k(x)=\inf_{i\ge k}{f_i(x)},\quad k=1,2,\ldots;x\in X$$
> 则$g_k\le f_k$, 从而
> $$\int_X{g_k\,\d\mu}\le\int_X{f_k\,\d\mu},\quad k=1,2,\ldots$$
> 同时, $0\le g_1\le g_2\le\cdots$, 显然
> $$\int_X{g_k\,\d\mu}\le\inf_{n\ge k}\left(\int_X{f_n\,\d\mu}\right),\quad k=1,2,\ldots$$
> 于是
> $$\lim_{n\to\infty}\int_X{g_n\,\d\mu}\le\liminf_{n\to\infty}\left(\int_X{f_n\,\d\mu}\right)\tag{I}$$
>由[[可测映射|此页面定理5]], 每个$g_k$都是可测的, 且由下极限定义
> $$\lim_{k\to\infty}g_k(x)=\liminf_{n\to\infty}{f_n(x)}\tag{II}$$
> 从而由[[单调收敛定理]], 结合(I),(II)
> $$\liminf_{n\to\infty}\left(\int_X{f_n\,\d\mu}\right)\ge\lim_{n\to\infty}\int_X{g_n\,\d\mu}=\int_X{\lim_{n\to\infty}{g_n}\,\d\mu}=\int_X{\left(\liminf_{n\to\infty}{f_n}\right)\,\d\mu}$$
> 证毕.

