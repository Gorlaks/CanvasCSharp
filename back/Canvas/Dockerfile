FROM mcr.microsoft.com/dotnet/core/aspnet:2.1-stretch-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.1-stretch AS build
WORKDIR /src
COPY ["Canvas/Canvas.csproj", "Canvas/"]
RUN dotnet restore "Canvas/Canvas.csproj"
COPY . .
WORKDIR "/src/Canvas"
RUN dotnet build "Canvas.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Canvas.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Canvas.dll"]