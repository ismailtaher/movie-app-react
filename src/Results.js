import React, { forwardRef } from "react";
import SearchPost from "./SearchPost";

const Results = forwardRef(
  (
    { searchResults, searchError, isSearchLoading, setShowResults, genres },
    ref
  ) => {
    return (
      <div
        className="absolute top-[77px] md:top-[47px] md:left-0 lg:top-[44px] bg-[#C6DABF] w-full z-10 text-black rounded-b py-2 md:py-2"
        ref={ref}>
        {isSearchLoading && <h2>Loading Search</h2>}
        {!isSearchLoading && searchError && (
          <h2 className="text-rose-900">{searchError}</h2>
        )}
        {!isSearchLoading &&
          !searchError &&
          searchResults &&
          Array.isArray(searchResults) && (
            <ul className="px-2">
              {searchResults?.slice(0, 5).map((result) => (
                <SearchPost
                  key={result.id}
                  result={result}
                  setShowResults={setShowResults}
                  genres={genres}
                />
              ))}
            </ul>
          )}
      </div>
    );
  }
);

export default Results;
