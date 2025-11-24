#分析 

>[!definition] Riemann积分
>设$f:[a,b]\to\R$是一元[[实变函数|实函数]], 我们对$[a,b]$作任意分割(任取$n$):
>$$a=x_0<x_1<\cdots<x_n=b$$
>若存在$I\in\R$使得对任意$\epsilon>0$都存在$\delta>0$使得
>$$\max_{1\le i\le n}\set{\Delta x_i}<\delta\implies\left|\sum_{i=1}^n{f(\xi_i)\Delta x_i}-I\right|<\epsilon$$
>其中$\Delta x_i=x_i-x_{i-1},\xi_i$为$[x_{i-1},x_i]$中任一点. 即
>$$\lim_{\max_{1\le i\le n}\set{\Delta x_i}\to 0}{\sum_{i=1}^n{f(\xi_i)\Delta x_i}}=I$$
>则称$f(x)$在$[a,b]$上**Riemann可积**, 
>$$\int_a^b{f(x)\,\d x}$$
>称为$f(x)$在$[a,b]$上的**Riemann积分**(Riemann integral).

分析学中, 我们不偏向使用Riemann积分的定义: 它笨重并且不方便推广. 我们更偏向使用[[Lebesgue积分]]的定义, 即改写作
$$\int_{[a,b]}{f}$$
但Riemann积分往往更容易计算. 如果一个函数是Riemann可积的, 我们可以使用微分的性质非常简单地推导积分.
