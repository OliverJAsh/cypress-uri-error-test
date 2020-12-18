describe("server", () => {
  it("handles errors", async () => {
    const responseTextPromise = fetch("/%").then((res) => res.text());

    expect(await responseTextPromise).to.equal("my custom error page");
  });
});
