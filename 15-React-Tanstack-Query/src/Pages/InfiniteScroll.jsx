import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../API/api";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const InfiniteScroll = () => {
  const { data, hasNextPage, fetchNextPage, status, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["users"],
      queryFn: fetchUsers,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        // console.log("lastPage", lastPage, allPages);
        return lastPage.length === 10 ? allPages.length + 1 : undefined;
      },
    });

  console.log(data);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;

    const scrollPercent = parseInt(
      (scrollTop / (scrollHeight - clientHeight - 20)) * 100
    );

    console.log(scrollPercent);

    if (scrollPercent >= 100 && hasNextPage) {
      fetchNextPage();
    }
  };

  // const { ref, inView } = useInView({
  //   threshold: 1,
  // });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // if (inView && hasNextPage) {
    //   fetchNextPage();
    // }
  }, [hasNextPage]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "error") return <div>Error fetching data</div>;

  return (
    <div>
      <h1>Infinite Scroll with React Query v5</h1>

      {data?.pages?.map((page, index) => (
        <ul key={index}>
          {page.map((user) => (
            <li
              key={user.id}
              style={{ padding: "10px", border: "1px solid #ccc" }}
            >
              <p>{user.login}</p>
              <img
                src={user.avatar_url}
                alt={user.login}
                width={50}
                height={50}
              />
            </li>
          ))}
        </ul>
      ))}

      <div
        // ref={ref}
        style={{ padding: "20px", textAlign: "center" }}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Scroll down to load more"
          : "No more users"}
      </div>
    </div>
  );
};
