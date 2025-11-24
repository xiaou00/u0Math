#分析 

>[!theorem] Young卷积不等式
>设$f,g:\R^n\to\R$, 且$f\in\ms L^p$, $g\in\ms L^q$, $1\le p,q\le\infty$. 若$r$满足
>$$\frac1p+\frac1q=\frac1r+1\quad(1\le r\le\infty)$$
>则[[卷积]]$f*g\in\ms L^r$, 且
>$$\norm{f*g}_r\le\norm{f}_p\cdot\norm{g}_q$$
>写作积分形式
>$$\int_{\R^n}{|(f*g)(x)|^r\,\d x}\le\left(\int_{\R^n}{|f(x)|^p\,\d x}\right)\left(\int_{\R^n}{|g(x)|^q\,\d x}\right)$$

