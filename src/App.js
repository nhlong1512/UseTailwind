import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="pt-12">
      <h1 class="text-center text-[#facc15] text-2xl lg:text-3xl xl:text-5xl font-semibold mb-[8px] lg:mb-5">
        Live anywhere
      </h1>
      <h2 class="text-center text-[#22c55e] text-xl font-normal mb-[16px] lg:text-2xl xl:text-3xl lg:mb-[32px]">
        Keep calm & travel on
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 max-w-4xl mx-auto px-[15px] gap-y-7 lg:gap-y-0">
        <div>
          <div class="h-96 mb-5">
            <img src="https://media.istockphoto.com/photos/young-couple-of-hikers-bound-up-ridge-together-picture-id1303216086?b=1&k=20&m=1303216086&s=170667a&w=0&h=NplYRlKiS15Ki9_BlXufbosQ1Pw_oMwfY4f18cF5v1Q=" alt=""
              class="w-full h-full rounded-lg object-cover"
            />
          </div>
          <h3 class = "text-center font-medium text-lg mb-2">Enjoy the great cold</h3>
          <span class = "block text-center text-gray-400 text-sm font-medium">6,789 properties</span>
        </div>
        <div>
          <div class="h-96 mb-5">
            <img src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt=""
              class="w-full h-full rounded-lg object-cover"
            />
          </div>
          <h3 class = "text-center font-medium text-lg mb-2">Pick up the earliest sunrise</h3>
          <span class = "block text-center text-gray-400 text-sm font-medium">6,789 properties</span>
        </div>
        <div>
          <div class="h-96 mb-5">
            <img src="https://images.unsplash.com/photo-1597218544531-3c10f1d25898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXN0YXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 " alt=""
              class="w-full h-full rounded-lg object-cover"
            />
          </div>
          <h3 class = "text-center font-medium text-lg mb-2">Unique stay</h3>
          <span class = "block text-center text-gray-400 text-sm font-medium">6,789 properties</span>
        </div>
      </div>
      

    </div>
  );
}

export default App;
