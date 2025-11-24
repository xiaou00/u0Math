#分析 

>[!theorem] Stolz-Cesáro定理 (Stolz-Cesáro Theorem)
>设数列$(a_n)$和$(b_n)$, 其中$(b_n)$严格递增, 且$\lim_{n\to\infty}b_n=+\infty$. 若
>$$\lim_{n\to\infty}{\frac{a_n-a_{n-1}}{b_n-b_{n-1}}}=a\in\R$$
>则$\lim_{n\to\infty}\frac{a_n}{b_n}=a$.

>[!proof]
>令$a_0=b_0=0$, 下面构造一个Toeplitz矩阵, 设矩阵$\mb T=(t_{nk})$, 令
$$t_{nk}=\frac{b_k-b_{k-1}}{n}$$
显然满足条件, 因此$\mb T$是Toeplitz矩阵, 令
$$x_n=\frac{a_n-a_{n-1}}{b_n-b_{n-1}},\quad n=1,2,\ldots$$
则
$$\sum_{k=1}^{n}{t_{nk}x_k}=\sum_{k=1}^{n}{\left(\frac{b_k-b_{k-1}}{b_n}\cdot\frac{a_k-a_{k-1}}{b_k-b_{k-1}}\right)}=\sum_{k=1}^{n}{\frac{a_k-a_{k-1}}{b_n}}=\frac{a_n}{b_n},\quad n=1,2,\ldots$$
由$\lim_{n\to\infty}{x_n}=a$, 由[[Silverman-Toeplitz定理]]知, 
$$\lim_{n\to\infty}{\frac{a_n}{b_n}}=\lim_{n\to\infty}{x_n}=a$$
