#include <iostream>
#include <vector>
using namespace std;

void helper(vector<vector<int>> &mat, int r, int c, string path, vector<string> &ans)
{
    int n = mat.size();
    if (r < 0 || c < 0 || r >= n || c >= n || mat[r][c] == 0 || mat[r][c] == -1)
        return;

    // Base case: If we've reached the end of the matrix, add the path to the result
    if (r == n - 1 && c == n - 1)
    {
        ans.push_back(path);
        return;
    }
    // Mark the current cell as visited`
    mat[r][c] = -1;
    ;

    helper(mat, r + 1, c, path + "D", ans); // down
    helper(mat, r - 1, c, path + "U", ans); // up
    helper(mat, r, c - 1, path + "L", ans); // left
    helper(mat, r, c + 1, path + "R", ans); // right

    // Mark the current cell as unvisited and explore all possible paths from it
    mat[r][c] = 1; // backtrack after exploring all possible paths from current cell
}

vector<string> findPath(vector<vector<int>> &mat)
{
    vector<string> ans;
    string path = "";

    helper(mat, 0, 0, path, ans);
    return ans;
}
int main()
{
    vector<vector<int>> mat = {{1, 0, 0, 0}, {1, 1, 0, 1}, {1, 1, 0, 0}, {0, 1, 1, 1}};
    vector<string> ans = findPath(mat);
    for (string path : ans)
    {
        cout << path << endl;
    }

    return 0;
}